import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  type NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import { type IAppConfiguration } from './config';
import { APP_CONF } from './constants';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      cors: true,
    },
  );

  const configService = app.get(ConfigService);
  const { host, port } = configService.get<IAppConfiguration>(APP_CONF);

  await app.listen(port, host);
}

bootstrap();
