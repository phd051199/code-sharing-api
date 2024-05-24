import { Global, Module } from '@nestjs/common';
import {
  ConfigModule as NestConfigModule,
  ConfigService,
} from '@nestjs/config';

import { Env } from '@/env';

import {
  appConfiguration,
  cookieConfiguration,
  jwtConfiguration,
  minioConfiguration,
  oauthConfiguration,
  redisConfiguration,
} from './factories';

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
