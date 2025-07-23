/**
 * Constants for subgraph configuration
 */
export const constants = {
  slugs: {
    subgraph: "subgraph",
  },
} as const;

/**
 * Environment variables for subgraph configuration
 */
export const SUBGRAPH_CONFIG = {
  PROJECT_ID: process.env.SUBGRAPH_PROJECT_ID!,
  VERSION: process.env.SUBGRAPH_VERSION!,
} as const;

/**
 * Build subgraph URL for a specific chain
 *
 * @param chainSlug - chain slug (e.g., 'mainnet', 'sepolia')
 * @returns the subgraph URL
 */
export const buildSubgraphUrl = (chainSlug: string): string =>
  `https://api.goldsky.com/api/public/${SUBGRAPH_CONFIG.PROJECT_ID}/subgraphs/privote-${constants.slugs.subgraph}/${SUBGRAPH_CONFIG.VERSION}/${chainSlug}`;
