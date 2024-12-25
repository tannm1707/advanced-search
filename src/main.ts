import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)
  const port = configService.get("APP_PORT");
  await app.listen(parseInt(port, 10) ?? 3000, "0.0.0.0");
}
bootstrap();
