import { Global, Module } from '@nestjs/common';
import {
  ConfigModule as NestConfigModule,
  ConfigService,
} from '@nestjs/config';

import { Env } from '@/env';

import { appConfiguration } from './factories/app.config';
import {
  cookieConfiguration,
  jwtConfiguration,
  oauthConfiguration,
} from './factories/auth.config';
import { minioConfiguration } from './factories/minio.config';
import { redisConfiguration } from './factories/redis.config';

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
