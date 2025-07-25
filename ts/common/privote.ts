import { Contract, ContractFactory, ContractRunner } from "ethers";
import { PRIVOTE_ABI } from "./privote-abi";

export class PrivoteFactory extends ContractFactory {
  static connect(address: string, runner?: ContractRunner | null) {
    return new Contract(address, PRIVOTE_ABI, runner);
  }
}
