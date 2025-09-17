import { Body, Controller, HttpException, HttpStatus, Logger, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { Public } from "../auth/AccountSignatureGuard.service";
import { WebhookGuard } from "../auth/WebhookGuard.service";
import { mapErrorToHttpStatus } from "../common/http";

import { GoldskyWebhookPayloadDto } from "./dto";
import { WebhookService } from "./webhook.service";

@ApiTags("v1/webhook")
@Controller("v1/webhook")
@UseGuards(WebhookGuard)
export class WebhookController {
  /**
   * Logger
   */
  private readonly logger = new Logger(WebhookController.name);

  /**
   * Initialize WebhookController
   *
   * @param webhookService - webhook service
   */
  constructor(private readonly webhookService: WebhookService) {}

  /**
   * Handle Goldsky webhook for PollCreated events
   * This endpoint receives decoded logs from Goldsky pipeline and registers polls for finalization
   */
  @ApiOperation({
    summary: "Handle Goldsky webhook for PollCreated events",
    description: "Receives decoded PollCreated event logs from Goldsky pipeline and automatically registers polls for finalization",
  })
  @ApiResponse({ 
    status: HttpStatus.OK, 
    description: "Webhook processed successfully",
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Invalid webhook payload" })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: "Failed to process webhook" })
  @Post("goldsky/poll-created")
  async handleGoldskyPollCreated(@Body() payload: GoldskyWebhookPayloadDto): Promise<boolean> {
    this.logger.log(`Received Goldsky webhook`);

    try {
      // Validate payload structure
      if (!this.webhookService.validateWebhookPayload(payload)) {
        throw new Error("Invalid webhook payload structure");
      }

      // Process the webhook payload
      const result = await this.webhookService.processGoldskyWebhook(payload);

      return result;
    } catch (error) {
      this.logger.error(`Error processing Goldsky webhook:`, error);
      throw new HttpException((error as Error).message, mapErrorToHttpStatus(error as Error));
    }
  }

  /**
   * Health check endpoint for webhook service
   */
  @ApiOperation({
    summary: "Webhook service health check",
    description: "Simple health check endpoint to verify webhook service is running",
  })
  @ApiResponse({ status: HttpStatus.OK, description: "Webhook service is healthy" })
  @Public()
  @Post("health")
  async health(): Promise<{ status: string; timestamp: string }> {
    return {
      status: "healthy",
      timestamp: new Date().toISOString(),
    };
  }
}
