import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import dotenv from "dotenv";
import helmet from "helmet";

import path from "path";

const projectRoot = process.cwd();
dotenv.config({
  path: [path.resolve(projectRoot, ".env"), path.resolve(projectRoot, ".env.example")],
});

async function bootstrap() {
  const { AppModule } = await import("./app.module.js");
  const app = await NestFactory.create(AppModule, {
    logger: ["log", "fatal", "error", "warn"],
  });

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: [`'self'`],
          styleSrc: [`'self'`, `'unsafe-inline'`],
          imgSrc: [`'self'`, "data:", "validator.swagger.io"],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
        },
      },
    }),
  );
  app.enableCors({ origin: process.env.COORDINATOR_ALLOWED_ORIGINS?.split(",") });

  const config = new DocumentBuilder()
    .setTitle("Coordinator service")
    .setDescription("Coordinator service API methods")
    .setVersion("1.0")
    .addTag("coordinator")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(process.env.COORDINATOR_PORT || 3000, process.env.COORDINATOR_HOST || "127.0.0.1");
}

bootstrap().catch((error) => {
  console.error('Failed to start the application:', error);
  process.exit(1);
});
