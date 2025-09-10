import { Hex, zeroAddress } from "viem";

import { ErrorCodes, ESupportedNetworks } from "../ts/common";
import { FileService } from "../ts/file/file.service";
import { ENTRY_POINT, generateApproval, KERNEL_VERSION } from "../ts/sessionKeys/__tests__/utils";
import { SessionKeysService } from "../ts/sessionKeys/sessionKeys.service";

describe("E2E Account Abstraction Tests", () => {
  const fileService = new FileService();
  const sessionKeyService = new SessionKeysService(fileService);

  let approval: string;
  let sessionKeyAddress: Hex;

  beforeAll(async () => {
    sessionKeyAddress = (await sessionKeyService.generateSessionKey()).sessionKeyAddress;
    approval = await generateApproval(sessionKeyAddress);
  });

  describe("sessionKeys", () => {
    it("should create a client from a session key and an approval", async () => {
      const client = await sessionKeyService.generateClientFromSessionKey(
        sessionKeyAddress,
        approval,
        ESupportedNetworks.OPTIMISM_SEPOLIA,
      );

      expect(client).toBeDefined();
      expect(client.transport.key).toBe("http");
      expect(client.key).toBe("Account");
      expect(client.account.address).not.toBe(zeroAddress);
      expect(client.account.kernelVersion).toBe(KERNEL_VERSION);
      expect(client.account.entryPoint.version).toBe(ENTRY_POINT.version);
      // this is an account with limited permissions so no sudo validator
      expect(client.account.kernelPluginManager.address).toBe(zeroAddress);
      expect(client.account.kernelPluginManager.sudoValidator).toBe(undefined);

      // send a transaction
      const tx = await client.sendTransaction({
        to: zeroAddress,
        value: 0n,
        data: "0x",
      });

      expect(tx.length).toBeGreaterThan(0);
    });

    it("should not allow to create a client after the session key has been deactivated", async () => {
      sessionKeyService.deactivateSessionKey(sessionKeyAddress);

      await expect(
        sessionKeyService.generateClientFromSessionKey(
          sessionKeyAddress,
          approval,
          ESupportedNetworks.OPTIMISM_SEPOLIA,
        ),
      ).rejects.toThrow(ErrorCodes.SESSION_KEY_NOT_FOUND.toString());
    });
  });
});
