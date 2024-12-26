import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { generateApiPath } from 'src/utils';

@Controller(generateApiPath("product"))
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productService.create(createProductDto);
  }

  @Get()
  async findAll() {
    const data = await this.productService.findAll();
    return {data};
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.productService.findById(id);
    return {data};
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return await this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const response = await this.productService.remove(id);
    return {response};
  }
}
