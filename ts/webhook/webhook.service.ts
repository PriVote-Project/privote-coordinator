import { EMode } from "@maci-protocol/sdk";
import { Injectable, Logger } from "@nestjs/common";

import type { IGoldskyWebhookPayload, IProcessedPollData } from "./types";

import { ESupportedNetworks } from "../common/networks";
import { SchedulerService } from "../scheduler/scheduler.service";
import { ErrorCodes } from "../common";
import { Keypair, PrivateKey, PublicKey } from "@maci-protocol/domainobjs";

const POLL_CREATED_PARAMS_LENGTH = 4;
const POLL_ID_INDEX = 0;
const POLL_COORDINATOR_PUBLIC_KEY_X_INDEX = 1;
const POLL_COORDINATOR_PUBLIC_KEY_Y_INDEX = 2;
const MODE_INDEX = 3;

@Injectable()
export class WebhookService {
  /**
   * Logger
   */
  private readonly logger = new Logger(WebhookService.name);

  /**
   * Coordinator keypair for validation
   */
  private readonly coordinatorKeypair: Keypair;

  /**
   * Chain ID to network mapping
   */
  private readonly chainIdToNetwork: Record<number, ESupportedNetworks> = {
    1: ESupportedNetworks.ETHEREUM,
    10: ESupportedNetworks.OPTIMISM,
    137: ESupportedNetworks.POLYGON,
    8453: ESupportedNetworks.BASE,
    42161: ESupportedNetworks.ARBITRUM_ONE,
    11155111: ESupportedNetworks.ETHEREUM_SEPOLIA,
    84532: ESupportedNetworks.BASE_SEPOLIA,
    421614: ESupportedNetworks.ARBITRUM_SEPOLIA,
    11155420: ESupportedNetworks.OPTIMISM_SEPOLIA,
    534351: ESupportedNetworks.SCROLL_SEPOLIA,
    534352: ESupportedNetworks.SCROLL,
    1337: ESupportedNetworks.LOCALHOST,
  };

  /**
   * Initialize WebhookService
   *
   * @param schedulerService - scheduler service to register polls
   */
  constructor(private readonly schedulerService: SchedulerService) {
    this.coordinatorKeypair = new Keypair(PrivateKey.deserialize(process.env.COORDINATOR_MACI_PRIVATE_KEY!));
  }

  /**
   * Process Goldsky webhook payload and register polls for finalization
   *
   * @param payload - Goldsky webhook payload containing DeployPoll events
   * @returns Processing response with success/failure counts
   */
  async processGoldskyWebhook(payload: IGoldskyWebhookPayload): Promise<boolean> {
    try {
      if (payload.eventSignature !== "DeployPoll") {
        this.logger.warn(`Skipping non-DeployPoll event: ${payload.eventSignature}`);
        return false;
      }

      const processedPoll = this.processDeployPollEvent(payload);
      await this.registerPollForFinalization(processedPoll);

      return true;
    } catch (error) {
      this.logger.error(`Failed to process DeployPoll event: ${(error as Error).message}`);
      return false;
    }
  }

  /**
   * Process a single DeployPoll event and extract relevant data
   *
   * @param event - DeployPoll event from Goldsky
   * @returns Processed poll data
   */
  private processDeployPollEvent(event: IGoldskyWebhookPayload): IProcessedPollData {
    const { address, eventParams, blockNumber, transactionHash, chainId } = event;

    const network = this.chainIdToNetwork[chainId];
    if (!network) {
      throw new Error(`Unsupported chain ID: ${chainId}`);
    }

    return {
      maciAddress: address,
      pollId: eventParams[POLL_ID_INDEX],
      mode: Number(eventParams[MODE_INDEX]) as EMode,
      chain: network,
      deploymentBlockNumber: blockNumber,
      transactionHash,
    };
  }

  /**
   * Register poll for finalization using the scheduler service
   *
   * @param pollData - Processed poll data
   */
  private async registerPollForFinalization(pollData: IProcessedPollData): Promise<void> {
    const { maciAddress, pollId, chain, deploymentBlockNumber, mode } = pollData;

    try {
      await this.schedulerService.registerPoll({
        maciAddress,
        pollId,
        chain,
        deploymentBlockNumber,
        mode,
        endDate: 0,
        merged: false,
        proofsGenerated: false,
        retryCount: 0,
      });

      this.logger.log(`Poll ${pollId} registered for finalization on ${chain}`);
    } catch (error) {
      const errorMessage = (error as Error).message;

      if (errorMessage.includes(ErrorCodes.POLL_ALREADY_SCHEDULED.toString())) {
        this.logger.warn(`Poll ${pollId} is already scheduled for finalization`);
        return;
      }

      if (errorMessage.includes(ErrorCodes.POLL_ALREADY_TALLIED.toString())) {
        this.logger.warn(`Poll ${pollId} has already been tallied`);
        return;
      }

      throw error;
    }
  }

  /**
   * Validate webhook payload structure and coordinator authorization
   *
   * @param payload - Raw webhook payload
   * @returns True if payload is valid and authorized
   */
  validateWebhookPayload(payload: any): payload is IGoldskyWebhookPayload {
    try {
      if (!payload || typeof payload !== "object") {
        this.logger.warn("Invalid payload: not an object");
        return false;
      }

      const requiredFields = [
        "id",
        "transactionHash",
        "blockNumber",
        "address",
        "eventSignature",
        "chainId",
        "eventParams",
      ];
      for (const field of requiredFields) {
        if (!(field in payload)) {
          this.logger.warn(`Invalid payload: missing required field '${field}'`);
          return false;
        }
      }

      if (
        typeof payload.id !== "string" ||
        typeof payload.transactionHash !== "string" ||
        typeof payload.blockNumber !== "number" ||
        typeof payload.address !== "string" ||
        typeof payload.eventSignature !== "string" ||
        typeof payload.chainId !== "number"
      ) {
        this.logger.warn("Invalid payload: incorrect field types");
        return false;
      }

      if (payload.eventSignature !== "DeployPoll") {
        this.logger.warn(`Invalid payload: expected eventSignature 'DeployPoll', got '${payload.eventSignature}'`);
        return false;
      }

      if (!Array.isArray(payload.eventParams) || payload.eventParams.length !== POLL_CREATED_PARAMS_LENGTH) {
        this.logger.warn(`Invalid payload: eventParams must be array of length ${POLL_CREATED_PARAMS_LENGTH}`);
        return false;
      }

      const isValidParams = payload.eventParams.every((eventParam: any) => {
        return eventParam && typeof eventParam === "string";
      });

      if (!isValidParams) {
        this.logger.warn("Invalid payload: all eventParams must be non-empty strings");
        return false;
      }

      if (!this.chainIdToNetwork[payload.chainId]) {
        this.logger.warn(`Invalid payload: unsupported chainId ${payload.chainId}`);
        return false;
      }

      try {
        const payloadPublicKey = new PublicKey(
          payload.eventParams[POLL_COORDINATOR_PUBLIC_KEY_X_INDEX],
          payload.eventParams[POLL_COORDINATOR_PUBLIC_KEY_Y_INDEX],
        );

        const isAuthorized = this.coordinatorKeypair.publicKey.equals(payloadPublicKey);
        if (!isAuthorized) {
          this.logger.warn(
            `Invalid payload: coordinator public key mismatch: ${payloadPublicKey.serialize()} !== ${this.coordinatorKeypair.publicKey.serialize()}`,
          );
          return false;
        }

        return true;
      } catch (error) {
        this.logger.warn(`Invalid payload: failed to validate coordinator public key - ${(error as Error).message}`);
        return false;
      }
    } catch (error) {
      this.logger.error(`Payload validation error: ${(error as Error).message}`);
      return false;
    }
  }
}
