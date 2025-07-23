import { Injectable, Logger } from "@nestjs/common";

import type { ESupportedNetworks } from "../common";
import type { IPollCoordinatorResponse } from "./types";

import { buildSubgraphUrl } from "../common";

/**
 * SubgraphService is responsible for deploying subgraph.
 */
@Injectable()
export class SubgraphService {
  /**
   * Logger
   */
  private readonly logger: Logger;

  constructor() {
    this.logger = new Logger(SubgraphService.name);
  }

  /**
   * Fetch coordinator (owner) for a specific poll from subgraph
   *
   * @param pollId - the poll ID
   * @param chain - the blockchain network
   * @returns the coordinator address for the poll
   */
  async fetchPollCoordinator(pollId: number, chain: ESupportedNetworks): Promise<string> {
    const subgraphUrl = buildSubgraphUrl(chain);

    const query = `
      query GetPollCoordinator($pollId: ID!) {
        polls(where: { pollId: $pollId }) {
          id
          owner
          pollId
        }
      }
    `;

    const variables = {
      pollId: pollId.toString(),
    };

    try {
      this.logger.log(`Fetching coordinator for poll ${pollId} on ${chain}`, { url: subgraphUrl });

      const response = await fetch(subgraphUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = (await response.json()) as { data: IPollCoordinatorResponse };

      if (!result.data.polls) {
        throw new Error(`Poll with ID ${pollId} not found on ${chain}`);
      }

      const coordinator = result.data.polls[0].owner.toLowerCase();
      this.logger.log(`Found coordinator ${coordinator} for poll ${pollId} on ${chain}`);

      return coordinator;
    } catch (error) {
      this.logger.error(`Failed to fetch coordinator for poll ${pollId} on ${chain}`, error);
      throw new Error(
        `Failed to fetch coordinator for poll ${pollId}: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  }
}
