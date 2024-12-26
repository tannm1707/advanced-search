import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import {  IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsOptional()
    @IsString()
    name?: string;
  
    @IsString()
    @IsOptional()
    description:string;

    @IsOptional()
    @IsNumber()
    @Min(0)
    price?: number;
  
    @IsOptional()
    @IsString()
    category?: string;
}
