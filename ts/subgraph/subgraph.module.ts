import { Module } from "@nestjs/common";

import { SubgraphService } from "./subgraph.service";

@Module({
  imports: [SubgraphService],
  providers: [SubgraphService],
})
export class SubgraphModule {}
