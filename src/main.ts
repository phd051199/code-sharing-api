import fastifyCookie, { type FastifyCookieOptions } from '@fastify/cookie';
import fastifyCsrf, {
  type FastifyCsrfProtectionOptions,
} from '@fastify/csrf-protection';
import fastifyHelmet, { type FastifyHelmetOptions } from '@fastify/helmet';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  type NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { contentParser } from 'fastify-multer';

import { AppModule } from '@/app.module';
import { FastifyHooks } from '@/common/enums';
import { LoggerService } from '@/common/logger';
import { fastifyPassport } from '@/common/utils';
import { type AppConfiguration } from '@/config/types';
import { APP_CFG } from '@/constants';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      cors: true,
    },
  );
  const configService = app.get(ConfigService);
  const loggerService = app.get(LoggerService);
  const { host, port } = configService.get<AppConfiguration>(APP_CFG);

  app
    .getHttpAdapter()
    .getInstance()
    .addHook(FastifyHooks.onRequest, fastifyPassport);

  app.useLogger(loggerService);

  await app.register<FastifyCookieOptions>(fastifyCookie, {
    secret: configService.get<string>('cookie.secret'),
  });
  await app.register<FastifyCsrfProtectionOptions>(fastifyCsrf);
  await app.register<FastifyHelmetOptions>(fastifyHelmet, {
    contentSecurityPolicy: false,
  });
  await app.register(contentParser);

  await app.listen(port, host);
}

bootstrap();
