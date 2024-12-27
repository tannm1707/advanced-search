import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from 'src/schemas/product.schema';
import { ElasticsearchModule } from 'src/modules/elasticsearch/elasticsearch.module';

@Module({
  imports:[ MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]), ElasticsearchModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
