import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { BulkCreateProductDto, CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { generateApiPath } from 'src/utils';
import { ApiOkResponse, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetProductDto } from './dto/get-product.dto';
import { SearchProductDto } from './dto/search-product.dto';
import { Response } from 'express';
@ApiTags("product")
@Controller(generateApiPath("product"))
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOkResponse({type:CreateProductDto})
  async create(@Body() createProductDto: CreateProductDto, @Res() res:Response) {
    const data = await this.productService.create(createProductDto);
    res.json({data});
  }

  @Post('bulk-create')
  @ApiOperation({ summary: 'Bulk Create array of product' })
  @ApiOkResponse({type:BulkCreateProductDto})
  async bulkCreate(@Body() bulkCreateProductDto: BulkCreateProductDto) {
    const { products } = bulkCreateProductDto;
    const result = await this.productService.bulkCreate(products);
    return result;
  }

  @Get()
  @ApiOperation({ summary: 'Get All Products' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved all products data.' })
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
  async findOne(@Param('id') id: string, @Res() res:Response) {
    const data = await this.productService.findById(id);
    res.json({data});
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto, @Res() res:Response) {
    const data = await this.productService.update(id, updateProductDto);
    res.json({data});
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res:Response) {
    const response = await this.productService.remove(id);
    res.json(response);
  }

}
