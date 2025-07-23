import { EMode } from "@maci-protocol/contracts";
import dotenv from "dotenv";
import { zeroAddress } from "viem";

import { FileService } from "../../file/file.service";
import { RedisService } from "../../redis/redis.service";
import { HealthService } from "../health.service";

dotenv.config();

describe("HealthService", () => {
  const fileService = new FileService();
  const redisService = new RedisService();
  const healthService = new HealthService(fileService, redisService);

  beforeAll(async () => {
    await redisService.onModuleInit();
  });

  describe("checkRapidsnark", () => {
    it("should return rapidsnark path and executability status", async () => {
      const response = await healthService.checkRapidsnark();

      expect(response.rapidsnarkExecutablePath).toBe(process.env.COORDINATOR_RAPIDSNARK_EXE);
      expect(response.rapidsnarkIsAccessible).toBe(true);
      expect(response.rapidsnarkIsExecutable).toBe(true);
    });

    it("should return false when rapidsnark path is not set", async () => {
      process.env.COORDINATOR_RAPIDSNARK_EXE = "/incorrect/path/to/rapidsnark";
      const response = await healthService.checkRapidsnark();

      expect(response.rapidsnarkIsAccessible).toBe(false);
      expect(response.rapidsnarkIsExecutable).toBe(false);
    });
  });

  describe("checkZkeysDirectory", () => {
    it("should return if zkeys directory exists and the available zkeys paths", async () => {
      const { zkeysDirectoryExists, availableZkeys } = await healthService.checkZkeysDirectory();
      const numberofZkeys = Object.keys(availableZkeys).length;

      const expectedNumberOfZkeys =
        1 + // poll joining zkey
        1 + // poll joined zkey
        3 + // message process zkey for modes (QV, NON_QV, FULL)
        2; // vote tally zkey for modes (only QV and NON_QV)

      expect(zkeysDirectoryExists).toBe(true);
      expect(numberofZkeys).toBe(expectedNumberOfZkeys);
    });

    it("should return less available zkeys when COORDINATOR_POLL_JOINING_ZKEY_NAME is not set in the env file", async () => {
      process.env.COORDINATOR_POLL_JOINING_ZKEY_NAME = "/incorrect/path/to/poll_joining";
      const { availableZkeys } = await healthService.checkZkeysDirectory();

      expect(availableZkeys[process.env.COORDINATOR_POLL_JOINING_ZKEY_NAME]).toBe(undefined);
    });

    it("should return less available zkeys when COORDINATOR_POLL_JOINED_ZKEY_NAME is not set in the env file", async () => {
      process.env.COORDINATOR_POLL_JOINED_ZKEY_NAME = "/incorrect/path/to/poll_joined";
      const { availableZkeys } = await healthService.checkZkeysDirectory();

      expect(availableZkeys[process.env.COORDINATOR_POLL_JOINED_ZKEY_NAME]).toBe(undefined);
    });

    it("should return less available zkeys when COORDINATOR_TALLY_ZKEY_NAME is not set in the env file", async () => {
      process.env.COORDINATOR_TALLY_ZKEY_NAME = "/incorrect/path/to/tally_zkey";
      const { availableZkeys } = await healthService.checkZkeysDirectory();

      expect(availableZkeys[`${process.env.COORDINATOR_TALLY_ZKEY_NAME}_Mode_${String(EMode.NON_QV)}`]).toBe(undefined);
      expect(availableZkeys[`${process.env.COORDINATOR_TALLY_ZKEY_NAME}_Mode_${String(EMode.QV)}`]).toBe(undefined);
    });

    it("should return less available zkeys when COORDINATOR_MESSAGE_PROCESS_ZKEY_NAME is not set in the env file", async () => {
      process.env.COORDINATOR_MESSAGE_PROCESS_ZKEY_NAME = "/incorrect/path/to/message_process_zkey";
      const { availableZkeys } = await healthService.checkZkeysDirectory();

      expect(availableZkeys[`${process.env.COORDINATOR_MESSAGE_PROCESS_ZKEY_NAME}_Mode_${String(EMode.NON_QV)}`]).toBe(
        undefined,
      );
      expect(availableZkeys[`${process.env.COORDINATOR_MESSAGE_PROCESS_ZKEY_NAME}_Mode_${String(EMode.QV)}`]).toBe(
        undefined,
      );
      expect(availableZkeys[`${process.env.COORDINATOR_MESSAGE_PROCESS_ZKEY_NAME}_Mode_${String(EMode.FULL)}`]).toBe(
        undefined,
      );
    });

    it("should return false when zkeys directory is not set", async () => {
      process.env.COORDINATOR_ZKEY_PATH = "/incorrect/path/to/zkeys";
      const { zkeysDirectoryExists } = await healthService.checkZkeysDirectory();

      expect(zkeysDirectoryExists).toBe(false);
    });
  });

  describe("checkWalletFunds", () => {
    it("should return the wallet address", async () => {
      const { address } = await healthService.checkWalletFunds();

      expect(address).toBeDefined();
      expect(address).not.toBe(zeroAddress);
    });

    it("should return 0x if coordinator private key is not set", async () => {
      process.env.PRIVATE_KEY = "";
      const { address } = await healthService.checkWalletFunds();

      expect(address).toBe(zeroAddress);
    });
  });

  describe("checkRedisConnection", () => {
    it("should return true if Redis connection is open", () => {
      const isRedisOpen = healthService.checkRedisConnection();

      expect(isRedisOpen).toBe(true);
    });
  });
});
