import { Global, Module } from '@nestjs/common';
import {
  ConfigModule as NestConfigModule,
  ConfigService,
} from '@nestjs/config';

import { Env } from '@/env';

import { appConfiguration } from './app.config';
import {
  cookieConfiguration,
  jwtConfiguration,
  oauthConfiguration,
} from './auth.config';
import { minioConfiguration } from './minio.config';
import { redisConfiguration } from './redis.config';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [
        appConfiguration,
        redisConfiguration,
        minioConfiguration,
        jwtConfiguration,
        oauthConfiguration,
        cookieConfiguration,
      ],
      isGlobal: true,
      validate: Env.validate,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
