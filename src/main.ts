import { Logger, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import type { AppConfiguration } from './app.configuration';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('bootstrap');
  const configService = app.get(ConfigService);

  app.enableCors({
    origin: '*',
    credentials: true,
  });

  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
  });

  const { host, port } = configService.get<AppConfiguration>('app');

  await app.listen(port, host);

  logger.log(`Application is running on: http://${host}:${port}`);
}

bootstrap();
