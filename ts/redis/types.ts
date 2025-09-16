import type { EMode } from "@maci-protocol/sdk";

import type { ESupportedNetworks } from "../common/networks";

/**
 * Interface of the minimal properties to identify a scheduled poll
 */
export interface IIdentityScheduledPoll {
  /**
   * Maci contract address
   */
  maciAddress: string;

  /**
   * Poll id (unique identifier)
   */
  pollId: string;

  /**
   * Chain in which the poll is deployed
   */
  chain: ESupportedNetworks;
}

/**
 * Interface for scheduled polls stored in Redis
 */
export interface IScheduledPoll extends IIdentityScheduledPoll {
  /**
   * Deployment block number
   */
  deploymentBlockNumber: number;

  /**
   * Voting mode
   */
  mode: EMode;

  /**
   * End date in seconds
   */
  endDate: number;

  /**
   * Whether the MACI contract's state root has been merged
   */
  merged: boolean;

  /**
   * Whether the proofs has been generated
   */
  proofsGenerated: boolean;

  /**
   * Retry count
   */
  retryCount: number;
}

/**
 * getPollKeyForRedis parameters
 */
export interface IGetPollKeyForRedisParams extends IIdentityScheduledPoll {
  /**
   * Test environment flag (optional)
   */
  test?: boolean;
}

/**
 * Interface for getAll single object
 */
export interface IGetAllSingleObject {
  /**
   * The key of the object
   */
  key: string;

  /**
   * The value of the object
   */
  value: string;
}