import { Injectable, Logger, type CanActivate, type ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

import type { Request as Req } from "express";
import type { Socket } from "socket.io";

import { PUBLIC_METADATA_KEY } from "./AccountSignatureGuard.service";

/**
 * WebhookGuard is responsible for protecting webhook endpoints.
 * It validates that the webhook request is valid.
 */
@Injectable()
export class WebhookGuard implements CanActivate {
  /**
   * Logger
   */
  private readonly logger: Logger;

  constructor(
    private readonly reflector: Reflector,
  ) {
    this.logger = new Logger(WebhookGuard.name);
  }

  /**
   * This function validates that the webhook request is valid.
   *
   * @param ctx - execution context
   * @returns whether the request is allowed or not
   */
  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    try {
      const isPublic = this.reflector.get<boolean>(PUBLIC_METADATA_KEY, ctx.getHandler());

      if (isPublic) {
        return true;
      }

      const secretName = process.env.GOLDSKY_WEBHOOK_SECRET_NAME!;

      const request = ctx.switchToHttp().getRequest<Partial<Req>>();
      const socket = ctx.switchToWs().getClient<Partial<Socket>>();
      const secretValue = socket.handshake?.headers[secretName] || request.headers?.[secretName];

      if (!secretValue) {
        this.logger.warn("No secret value");
        return false;
      }

      return secretValue === process.env.GOLDSKY_WEBHOOK_SECRET_VALUE!;
    } catch (error) {
      this.logger.error("Error in WebhookGuard", error);
      return false;
    }
  }
}
