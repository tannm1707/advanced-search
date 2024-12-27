import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, Min } from 'class-validator';

export class GetReportDto {
  @ApiPropertyOptional({
    description: 'Search text for product name or description',
    example: 'laptop',
  })
  @IsOptional()
  @IsString()
  term?: string;

  @ApiPropertyOptional({
    description: 'Category of the product',
    example: 'Electronics',
  })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({
    description: 'Minimum price of the product',
    example: 100,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minPrice?: number;

  @ApiPropertyOptional({
    description: 'Maximum price of the product',
    example: 1500,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  maxPrice?: number;
}

export class GetTotalReportDto {
  @ApiPropertyOptional({
    description: 'Category of the product',
    example: 'Electronics',
  })
  @IsOptional()
  @IsString()
  category?: string;
}

