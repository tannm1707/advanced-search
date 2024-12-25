import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvConfigModule } from './config/env.config';
import { ProductModule } from './product/product.module';
import { DatabaseConfigModule } from './config/database.config';
@Module({
  imports: [EnvConfigModule, ProductModule, DatabaseConfigModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
