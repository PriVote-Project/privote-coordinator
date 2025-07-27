import { JsonRpcProvider, Signer, Wallet } from "ethers";

import { getInfuraHttpUrl } from "./constants";
import { ErrorCodes } from "./errors";
import { ESupportedNetworks } from "./networks";

/**
 * Get the RPC url for the chain we need to interact with
 *
 * @param network - the network we want to interact with
 * @returns the RPC url for the network
 */
export const getRpcUrl = (network: ESupportedNetworks): string => {
  const rpcApiKey = process.env.COORDINATOR_RPC_API_KEY;

  if (!rpcApiKey) {
    throw new Error(ErrorCodes.COORDINATOR_RPC_API_KEY_NOT_SET.toString());
  }

  return getInfuraHttpUrl(network);
};

/**
 * Get a Ethers Signer given a chain and private key
 * @param chain
 * @returns
 */
export const getSigner = (chain: ESupportedNetworks): Signer => {
  const wallet = new Wallet(process.env.PRIVATE_KEY!);
  const infuraRpcUrl = getRpcUrl(chain);
  const provider = new JsonRpcProvider(infuraRpcUrl);

  return wallet.connect(provider);
};
