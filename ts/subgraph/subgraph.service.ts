import { Injectable, Logger } from "@nestjs/common";

/**
 * SubgraphService is responsible for deploying subgraph.
 */
@Injectable()
export class SubgraphService {
  /**
   * Logger
   */
  private readonly logger: Logger;

  /**
   * Subgraph endpoint
   */
  private readonly endpoint: string;

  constructor() {
    this.logger = new Logger(SubgraphService.name);
    this.endpoint = process.env.SUBGRAPH_ENDPOINT!;
  }

  /**
   * Fetch all Coordinators
   */
  fetchAllCoordinators(): void {
    this.logger.error("fetchAllCoordinators: Not Implemented yet!", { endpoint: this.endpoint });
    throw new Error("fetchAllCoordinators: Not Implemented yet!");
  }
}
