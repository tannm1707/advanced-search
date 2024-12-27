import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateProductDto } from "./create-product.dto";
import { IsNumber, IsOptional, IsString, Min } from "class-validator";

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsOptional()
  @IsString()
  @ApiProperty({ description: "Product Name", required: false })
  name?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: "Product description", required: false })
  description: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty({ description: "Product Price", required: false })
  price?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: "Product Category", required: false })
  category?: string;
}
