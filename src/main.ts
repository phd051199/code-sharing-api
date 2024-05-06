import { Logger, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import type { SwaggerCustomOptions } from '@nestjs/swagger';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import type { IAppConfiguration } from './config';
import { APP, BOOTSTRAP } from './constants';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  const logger = app.get(Logger);
  const configService = app.get(ConfigService);
  const { host, port, version } = configService.get<IAppConfiguration>(APP);

  app.enableCors({
    credentials: true,
  });

  app.enableVersioning({
    defaultVersion: version,
    type: VersioningType.URI,
  });

  const swaggerBuilder = new DocumentBuilder().addBearerAuth().build();
  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
  };
  const document = SwaggerModule.createDocument(app, swaggerBuilder);
  SwaggerModule.setup('docs', app, document, customOptions);

  await app.listen(port, host, () =>
    logger.log(`Application is running on http://${host}:${port}`, BOOTSTRAP),
  );
};

bootstrap();
