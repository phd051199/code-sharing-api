import fastifyCookie from '@fastify/cookie';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  type NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from '@/app.module';
import { type AppConfiguration } from '@/config/types';
import { APP_CFG } from '@/constants';

import { fastifyOnRequestHook } from './common/utils';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      cors: true,
    },
  );
  const appInstance = app.getHttpAdapter().getInstance();
  const configService = app.get(ConfigService);

  app.register(fastifyCookie, {
    secret: configService.get<string>('cookie.secret'),
  });

  appInstance.addHook('onRequest', fastifyOnRequestHook);

  const { host, port } = configService.get<AppConfiguration>(APP_CFG);
  await app.listen(port, host);
}

bootstrap();
