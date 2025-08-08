import { Logger, UsePipes, ValidationPipe, UseGuards } from "@nestjs/common";
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, WsException } from "@nestjs/websockets";

import type { IGenerateProofsBatchData, IProof, ITallyData } from "@maci-protocol/sdk";
import type { Server } from "socket.io";

import { ProofServiceGuard } from "../auth/ProofServiceGuard.service";

import { GenerateProofDto } from "./dto";
import { ProofGeneratorService } from "./proof.service";
import { EProofGenerationEvents } from "./types";

/**
 * ProofGateway is responsible for websockets integration between client and ProofGeneratorService.
 */
@WebSocketGateway({
  cors: {
    origin: process.env.COORDINATOR_ALLOWED_ORIGINS?.split(","),
  },
})
@UseGuards(ProofServiceGuard)
export class ProofGateway {
  /**
   * Logger
   */
  private readonly logger = new Logger(ProofGateway.name);

  /**
   * Websocket server
   */
  @WebSocketServer()
  server!: Server;

  /**
   * Initialize ProofGateway
   *
   * @param proofGeneratorService - proof generator service
   */
  constructor(private readonly proofGeneratorService: ProofGeneratorService) {}

  /**
   * Start full proof workflow (merge -> generate -> submit) via websocket.
   * Events:
   * 1. EProofGenerationEvents.START - trigger method call
   * 2. EProofGenerationEvents.MERGE_FINISH - emitted after state/message trees are merged
   * 3. EProofGenerationEvents.PROGRESS - generation batch progress (may emit multiple times)
   * 4. EProofGenerationEvents.GENERATE_FINISH - emitted when proof generation completes (proofs + tallyData)
   * 5. EProofGenerationEvents.SUBMIT_FINISH - emitted after successful on-chain submit (tallyData)
   * 6. EProofGenerationEvents.ERROR - emitted when any step fails
   *
   * @param data - generate proof dto (used for all steps)
   */
  @SubscribeMessage(EProofGenerationEvents.START)
  @UsePipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory(validationErrors) {
        return new WsException(validationErrors);
      },
    }),
  )
  async generate(
    @MessageBody()
    data: GenerateProofDto,
  ): Promise<void> {
    // 1) Merge
    try {
      await this.proofGeneratorService.merge({
        maciContractAddress: data.maciContractAddress,
        pollId: data.poll,
        approval: data.approval,
        sessionKeyAddress: data.sessionKeyAddress,
        chain: data.chain,
      });

      this.server.emit(EProofGenerationEvents.MERGE_FINISH, { pollId: data.poll });
    } catch (error) {
      this.logger.error(`Error during merge:`, error as Error);
      this.server.emit(EProofGenerationEvents.ERROR, { message: (error as Error).message });
      return;
    }

    // 2) Generate
    try {
      await this.proofGeneratorService.generate(data, {
        onBatchComplete: (result: IGenerateProofsBatchData) => {
          this.server.emit(EProofGenerationEvents.PROGRESS, result);
        },
        onComplete: (proofs: IProof[], tallyData?: ITallyData) => {
          this.server.emit(EProofGenerationEvents.GENERATE_FINISH, { proofs, tallyData });
        },
        onFail: (error: Error) => {
          this.logger.error(`Error during generation:`, error);
          this.server.emit(EProofGenerationEvents.ERROR, {
            message: error.message,
          });
        },
      });
    } catch (error) {
      // error already emitted via onFail above; just stop the workflow
      return;
    }

    // 3) Submit on-chain
    try {
      const tallyData = await this.proofGeneratorService.submit({
        maciContractAddress: data.maciContractAddress,
        pollId: data.poll,
        approval: data.approval,
        sessionKeyAddress: data.sessionKeyAddress,
        chain: data.chain,
      });

      this.server.emit(EProofGenerationEvents.SUBMIT_FINISH, { tallyData });
    } catch (error) {
      this.logger.error(`Error during submit:`, error as Error);
      this.server.emit(EProofGenerationEvents.ERROR, { message: (error as Error).message });
    }
  }
}
