import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { generateApiPath } from 'src/utils';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetProductDto } from './dto/get-product.dto';
import { SearchProductDto } from './dto/search-product.dto';
@ApiTags("product")
@Controller(generateApiPath("product"))
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get a welcome message' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved the welcome message.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async findAll(@Query() query: GetProductDto) {
    try{
      const data = await this.productService.findAll(query);
      return {data};
    }catch(e){
      console.log(e);
    }
  }

  @Get('search')
  @ApiQuery({ name: 'term', required: false, description: 'Search term for name or description' })
  @ApiQuery({ name: 'category', required: false, description: 'Category of the product' })
  @ApiQuery({ name: 'minPrice', required: false, description: 'Minimum price of the product', type: Number })
  @ApiQuery({ name: 'maxPrice', required: false, description: 'Maximum price of the product', type: Number })
  async search(@Query() query: SearchProductDto) {
    return await this.productService.search(
      query.term,
      query.category,
      query.minPrice,
      query.maxPrice,
    );
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
