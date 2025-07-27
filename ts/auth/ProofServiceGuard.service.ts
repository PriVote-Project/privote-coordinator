import { Injectable, Logger, type CanActivate, type ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ethers } from "ethers";

import fs from "fs";
import path from "path";

import type { Request as Req } from "express";
import type { Socket } from "socket.io";

import { ESupportedNetworks } from "../common";
import { CryptoService } from "../crypto/crypto.service";
import { SubgraphService } from "../subgraph/subgraph.service";

import { PUBLIC_METADATA_KEY } from "./AccountSignatureGuard.service";

/**
 * ProofServiceGuard is responsible for protecting proof service endpoints.
 * It validates that the coordinator making the request is the owner of the poll
 * by checking the signature against the poll coordinator from the subgraph.
 */
@Injectable()
export class ProofServiceGuard implements CanActivate {
  /**
   * Logger
   */
  private readonly logger: Logger;

  constructor(
    private readonly cryptoService: CryptoService,
    private readonly reflector: Reflector,
    private readonly subgraphService: SubgraphService,
  ) {
    this.logger = new Logger(ProofServiceGuard.name);
  }

  /**
   * This function validates that the coordinator making the request is the owner of the poll.
   *
   * @param ctx - execution context
   * @returns whether the request is allowed or not
   */
  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    try {
      const isPublic = this.reflector.get<boolean>(PUBLIC_METADATA_KEY, ctx.getHandler());

      if (isPublic) {
        return true;
      }

      const request = ctx.switchToHttp().getRequest<Partial<Req>>();
      const socket = ctx.switchToWs().getClient<Partial<Socket>>();
      const encryptedHeader = socket.handshake?.headers.authorization || request.headers?.authorization;

      if (!encryptedHeader) {
        this.logger.warn("No authorization header");
        return false;
      }

      // Extract and validate signature
      const privateKey = await fs.promises.readFile(path.resolve(process.env.COORDINATOR_PRIVATE_KEY_PATH!));
      const [signature, digest] = this.cryptoService
        .decrypt(privateKey, encryptedHeader.replace("Bearer", "").trim())
        .split(":");

      if (!signature || !digest) {
        this.logger.warn("No signature or digest");
        return false;
      }

      const coordinatorFromSignature = ethers.recoverAddress(Buffer.from(digest, "hex"), signature).toLowerCase();

      // Extract pollId and chain from request body
      const body = request.body as Record<string, unknown> | undefined;
      const { poll, pollId: pollIdFromSubmit, chain } = body || {};
      const pollId = (poll || pollIdFromSubmit) as number | undefined;
      const chainValue = chain as string | undefined;

      if (typeof pollId !== "number" || !chainValue) {
        this.logger.warn("Missing pollId or chain in request body", { pollId, chain: chainValue });
        return false;
      }

      // Validate chain is supported
      if (!Object.values(ESupportedNetworks).includes(chainValue as ESupportedNetworks)) {
        this.logger.warn("Unsupported chain", { chain: chainValue });
        return false;
      }

      // Fetch the coordinator from subgraph
      const coordinatorFromSubgraph = await this.subgraphService.fetchPollCoordinator(
        pollId,
        chainValue as ESupportedNetworks,
      );

      return coordinatorFromSignature === coordinatorFromSubgraph;
    } catch (error) {
      this.logger.error("Error in ProofServiceGuard", error);
      return false;
    }
  }
}
