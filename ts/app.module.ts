import { Module } from "@nestjs/common";
import { ThrottlerModule } from "@nestjs/throttler";

import { CryptoModule } from "./crypto/crypto.module";
import { FileModule } from "./file/file.module";
import { ProofModule } from "./proof/proof.module";
import { RedisModule } from "./redis/redis.module";
import { SessionKeysModule } from "./sessionKeys/sessionKeys.module";
import { SubgraphModule } from "./subgraph/subgraph.module";
import { SchedulerModule } from "./scheduler/scheduler.module";

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: Number(process.env.TTL),
        limit: Number(process.env.LIMIT),
      },
    ]),
    FileModule,
    CryptoModule,
    ProofModule,
    RedisModule,
    SessionKeysModule,
    SubgraphModule,
    SchedulerModule,
  ],
})
export class AppModule {}
