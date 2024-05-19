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

import { AppModule } from '@/app.module';
import { FastifyHooks } from '@/common/enums';
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

  app
    .getHttpAdapter()
    .getInstance()
    .addHook(FastifyHooks.onRequest, fastifyPassport);

  const configService = app.get(ConfigService);
  const { host, port } = configService.get<AppConfiguration>(APP_CFG);

  await app.register<FastifyCookieOptions>(fastifyCookie, {
    secret: configService.get<string>('cookie.secret'),
  });

  await app.register<FastifyCsrfProtectionOptions>(fastifyCsrf);

  await app.register<FastifyHelmetOptions>(fastifyHelmet, {
    contentSecurityPolicy: false,
  });

  await app.listen(port, host);
}

bootstrap();
