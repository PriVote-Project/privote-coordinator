import { Module } from "@nestjs/common";

import { SchedulerModule } from "../scheduler/scheduler.module";

import { WebhookController } from "./webhook.controller.js";
import { WebhookService } from "./webhook.service.js";

@Module({
  imports: [SchedulerModule],
  providers: [WebhookService],
  controllers: [WebhookController],
  exports: [WebhookService],
})
export class WebhookModule {}
