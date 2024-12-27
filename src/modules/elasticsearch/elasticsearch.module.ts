import { Module } from '@nestjs/common';
import { ElasticsearchModule as ESModule } from '@nestjs/elasticsearch';
import { ElasticsearchServiceWrapper } from './elasticsearch.service';

@Module({
  imports: [
    ESModule.register({
      node: 'http://localhost:9200/', // Replace with your Elasticsearch URL
    }),
  ],
  providers: [ElasticsearchServiceWrapper],
  exports: [ElasticsearchServiceWrapper],
})
export class ElasticsearchModule {}
