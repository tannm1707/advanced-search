import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from 'src/schemas/product.schema';
import { Model, Types } from 'mongoose';
@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}
  create(createProductDto: CreateProductDto) {
    const createdProduct = this.productModel.create(createProductDto);
    return createdProduct;
  }

  findAll() {
    return this.productModel.find().exec();
  }

  findById(id: string): Promise<Product> {
    const product = this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const updatedProduct = this.productModel
      .findByIdAndUpdate(id, updateProductDto, {
        new: true,
        runValidators: true,
      })
      .exec();

    if (!updatedProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return updatedProduct;
  }

  remove(id: string){
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid product ID format');
    }

    const result = this.productModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return `Successfully deleting product with ID ${id}`;
  }
}
