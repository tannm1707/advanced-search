import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: "Product Name", required: true })
  name: string;

  @IsString()
  @ApiProperty({ description: "Product Description", required: false })
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @ApiProperty({ description: "Product Price", required: true, default: 0 })
  price: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: "Product Category", required: true})
  category: string;
}

export class BulkCreateProductDto {
  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ description: "Product Array", required: true})
  products: CreateProductDto[];
}