import { ErrorCodes } from "./errors";
import { ESupportedNetworks } from "./networks";

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

/**
 * Mapping of chainId to RPC chain name an format followed by infura
 */
export const RPC_CHAIN_NAMES: Record<string, string> = {
  [ESupportedNetworks.ETHEREUM]: "mainnet",
  [ESupportedNetworks.OPTIMISM]: "optimism-mainnet",
  [ESupportedNetworks.BASE]: "base-mainnet",
  [ESupportedNetworks.ARBITRUM_ONE]: "arbitrum-mainnet",
  [ESupportedNetworks.ARBITRUM_SEPOLIA]: "arbitrum-sepolia",
  [ESupportedNetworks.OPTIMISM_SEPOLIA]: "optimism-sepolia",
  [ESupportedNetworks.BASE_SEPOLIA]: "base-sepolia",
  [ESupportedNetworks.SCROLL_SEPOLIA]: "scroll-sepolia",
};

/**
 * Build RPC URL for a specific chain
 */
export const getInfuraHttpUrl = (chainId: string) => {
  const chainSlug = RPC_CHAIN_NAMES[chainId];
  if (!chainSlug) {
    throw new Error(ErrorCodes.UNSUPPORTED_NETWORK.toString());
  }
  return `https://${chainSlug}.infura.io/v3/${process.env.COORDINATOR_RPC_API_KEY}`;
};
