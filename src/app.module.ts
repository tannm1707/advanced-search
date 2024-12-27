import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { EnvConfigModule } from "./config/env.config";
import { ProductModule } from "./product/product.module";
import { DatabaseConfigModule } from "./config/database.config";
import { ElasticsearchServiceWrapper } from "./modules/elasticsearch/elasticsearch.service";
import { ElasticsearchModule } from "./modules/elasticsearch/elasticsearch.module";
@Module({
  imports: [EnvConfigModule, ProductModule, DatabaseConfigModule, ElasticsearchModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly esService: ElasticsearchServiceWrapper) {}

  async onModuleInit() {
    const index = "products";
    const mappings = {
      properties: {
        name: { type: "text" },
        description: { type: "text" },
        category: { type: "keyword" },
        price: { type: "float" },
      },
    };

    await this.esService.createIndex(index, mappings);
  }
}
