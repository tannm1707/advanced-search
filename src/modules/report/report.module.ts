import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from 'src/schemas/product.schema';
import { ElasticsearchModule } from 'src/modules/elasticsearch/elasticsearch.module';

@Module({
  imports:[ MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]), ElasticsearchModule],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
