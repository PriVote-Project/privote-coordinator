/**
 * Interface that represents poll coordinator data
 */
export interface IPollCoordinator {
  /**
   * Poll contract address
   */
  id: string;

  /**
   * Coordinator address (owner of the poll)
   */
  owner: string;

  /**
   * Poll Id
   */
  pollId: string;
}

/**
 * GraphQL response for fetching poll coordinator
 */
export interface IPollCoordinatorResponse {
  polls: IPollCoordinator[] | null;
}
