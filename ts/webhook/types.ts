import type { Hex } from "viem";
import type { ESupportedNetworks } from "../common/networks";

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
  eventSignature: "PollCreated";

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

