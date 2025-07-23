import { Module } from "@nestjs/common";

import { ProofServiceGuard } from "../auth/ProofServiceGuard.service";
import { CryptoModule } from "../crypto/crypto.module";
import { FileModule } from "../file/file.module";
import { SessionKeysModule } from "../sessionKeys/sessionKeys.module";
import { SubgraphModule } from "../subgraph/subgraph.module";

import { ProofController } from "./proof.controller";
import { ProofGateway } from "./proof.gateway";
import { ProofGeneratorService } from "./proof.service";

@Module({
  imports: [FileModule, CryptoModule, SessionKeysModule, SubgraphModule],
  controllers: [ProofController],
  providers: [ProofGeneratorService, ProofGateway, ProofServiceGuard],
})
export class ProofModule {}
