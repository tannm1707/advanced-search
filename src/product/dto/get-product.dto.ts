import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateProductDto } from "./create-product.dto";
import { IsEnum, IsInt, IsNumber, IsOptional, IsString, Min } from "class-validator";
import { Transform } from "class-transformer";

export enum SortBy {
  NAME = "name",
  CATEGORY = "category",
  PRICE = "price",
}
export class GetProductDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ description: "Filter by item name", required: false })
  name?: string;

  @IsOptional()
  @IsInt()
  @ApiProperty({ description: "Current page for pagination", required: false, default: 1 })
  page?: number = 1;

  @IsOptional()
  @IsInt()
  @ApiProperty({ description: "Number of items per page", required: false, default: 10 })
  limit?: number = 10;

  @IsOptional()
  @IsInt()
  @ApiProperty({ description: "Minimum price for filtering", required: false })
  minPrice?: number;

  @IsOptional()
  @IsInt()
  @ApiProperty({ description: "Maximum price for filtering", required: false })
  maxPrice?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: "Filter by item category", required: false })
  category?: string;

  @IsOptional()
  @IsEnum(SortBy)
  @ApiProperty({
    description: "Field by which to sort the items",
    enum: SortBy,
    required: false,
    default: SortBy.NAME,
    enumName: "SortByEnum", // Optional name for enum in Swagger
  })
  sortBy?: SortBy = SortBy.NAME;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: "Sort order of the items",
    enum: ["asc", "desc"],
    default: "asc",
    required: false,
  })
  sortOrder?: "asc" | "desc" = "asc";
}
