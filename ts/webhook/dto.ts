import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsHexadecimal, IsInt, IsString } from "class-validator";

import type { Hex } from "viem";

/**
 * Goldsky webhook payload DTO
 */
export class GoldskyWebhookPayloadDto {
  @ApiProperty({
    description: "Event ID",
    type: String,
  })
  @IsString()
  id!: string;

  @ApiProperty({
    description: "Event signature",
    type: String,
  })
  @IsString()
  eventSignature!: string;

  @ApiProperty({
    description: "Transaction hash",
    type: String,
  })
  @IsHexadecimal()
  transactionHash!: Hex;

  @ApiProperty({
    description: "Block number",
    type: Number,
  })
  @IsInt()
  blockNumber!: number;

  @ApiProperty({
    description: "Block timestamp",
    type: Number,
  })
  @IsInt()
  blockTimestamp!: number;

  @ApiProperty({
    description: "Log index",
    type: Number,
  })
  @IsInt()
  logIndex!: number;

  @ApiProperty({
    description: "Contract address",
    type: String,
  })
  @IsHexadecimal()
  address!: Hex;

  @ApiProperty({
    description: "Chain name",
    type: String,
  })
  @IsString()
  chain!: string;

  @ApiProperty({
    description: "Chain Id",
    type: Number,
  })
  @IsInt()
  chainId!: number;

  @ApiProperty({
    description: "Event Params Array",
    type: Array,
  })
  @IsArray()
  eventParams!: (string | string[])[];
}
