import type { Hex } from "viem";
import type { ESupportedNetworks } from "../common/networks";
import type { EMode } from "@maci-protocol/sdk";

/**
 * Webhook request payload from Goldsky
 */
export interface IGoldskyWebhookPayload {
  /**
   * Webhook ID
   */
  id: string;

  /**
   * Transaction hash
   */
  transactionHash: Hex;

  /**
   * Block number
   */
  blockNumber: number;

  /**
   * Block timestamp
   */
  blockTimestamp: number;

  /**
   * Log index
   */
  logIndex: number;

  /**
   * Contract address (MACI contract)
   */
  address: Hex;

  /**
   * Event Signature
   */
  eventSignature: "DeployPoll";

  /**
   * Chain ID
   */
  chainId: number;

  /**
   * Chain name
   */
  chain: string;

  /**
   * Event parameters
   */
  eventParams: string[];
}

/**
 * Processed poll data for registration
 */
export interface IProcessedPollData {
  /**
   * MACI contract address
   */
  maciAddress: Hex;

  /**
   * Poll ID
   */
  pollId: string;

  /**
   * Mode
   */
  mode: EMode;

  /**
   * Chain
   */
  chain: ESupportedNetworks;

  /**
   * Deployment block number
   */
  deploymentBlockNumber: number;

  /**
   * Transaction hash
   */
  transactionHash: Hex;
}

