import { EMode } from "@maci-protocol/sdk";
import { Injectable, Logger } from "@nestjs/common";

import type {
  IGoldskyWebhookPayload,
  IProcessedPollData,
} from "./types";

import { ESupportedNetworks } from "../common/networks";
import { SchedulerService } from "../scheduler/scheduler.service";
import { ErrorCodes } from "../common";

@Injectable()
export class WebhookService {
  /**
   * Logger
   */
  private readonly logger = new Logger(WebhookService.name);

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
    1337: ESupportedNetworks.LOCALHOST,
  };

  /**
   * Initialize WebhookService
   *
   * @param schedulerService - scheduler service to register polls
   */
  constructor(private readonly schedulerService: SchedulerService) {}

  /**
   * Process Goldsky webhook payload and register polls for finalization
   *
   * @param payload - Goldsky webhook payload containing PollCreated events
   * @returns Processing response with success/failure counts
   */
  async processGoldskyWebhook(payload: IGoldskyWebhookPayload): Promise<boolean> {
    this.logger.log(`Processing PollCreated event from Goldsky webhook`);
    try {
      if (payload.eventSignature !== "PollCreated") {
        this.logger.warn(`Skipping non-PollCreated event: ${payload.eventSignature}`);
        return false;
      }

      const processedPoll = this.processPollCreatedEvent(payload);
      await this.registerPollForFinalization(processedPoll);

      this.logger.log(
        `Successfully processed PollCreated event for poll ${processedPoll.pollId} on ${processedPoll.chain}`,
      );
      return true;
    } catch (error) {
      this.logger.error(`Failed to process PollCreated event: ${(error as Error).message}`);
      return false;
    }
  }

  /**
   * Process a single PollCreated event and extract relevant data
   *
   * @param event - PollCreated event from Goldsky
   * @returns Processed poll data
   */
  private processPollCreatedEvent(event: IGoldskyWebhookPayload): IProcessedPollData {
    const { address, eventParams, blockNumber, transactionHash, chainId } = event;

    // Map chain ID to supported network
    const network = this.chainIdToNetwork[chainId];
    if (!network) {
      throw new Error(`Unsupported chain ID: ${chainId}`);
    }

    return {
      maciAddress: address,
      pollId: eventParams[0],
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
    const { maciAddress, pollId, chain, deploymentBlockNumber } = pollData;

    // Default to QV mode if not specified - this should be configurable
    const mode = EMode.QV;

    try {
      await this.schedulerService.registerPoll({
        maciAddress,
        pollId,
        chain,
        deploymentBlockNumber,
        mode,
        endDate: 0, // Will be fetched from the contract
        merged: false,
        proofsGenerated: false,
      });

      this.logger.log(`Poll ${pollId} registered for finalization on ${chain}`);
    } catch (error) {
      // Handle specific scheduler errors
      const errorMessage = (error as Error).message;
      
      if (errorMessage.includes(ErrorCodes.POLL_ALREADY_SCHEDULED.toString())) {
        this.logger.warn(`Poll ${pollId} is already scheduled for finalization`);
        return; // Don't throw error for already scheduled polls
      }

      if (errorMessage.includes(ErrorCodes.POLL_ALREADY_TALLIED.toString())) {
        this.logger.warn(`Poll ${pollId} has already been tallied`);
        return; // Don't throw error for already tallied polls
      }

      throw error;
    }
  }

  /**
   * Validate webhook payload structure
   *
   * @param payload - Raw webhook payload
   * @returns True if payload is valid
   */
  validateWebhookPayload(payload: any): payload is IGoldskyWebhookPayload {
    if (!payload || typeof payload !== "object") {
      return false;
    }

    if (!Array.isArray(payload.eventParams) || payload.eventParams.length !== 10) {
      return false;
    }

    // Validate each event has required fields
    return payload.eventParams.every((eventParam: any) => {
      return eventParam && typeof eventParam === "string";
    });
  }
}
