import { type Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

import { type RedisConfiguation } from '@/config/types';
import { REDIS_CFG, REDIS_CLIENT } from '@/constants';

export type RedisClient = Redis;

export const redisProvider: Provider = {
  inject: [ConfigService],
  useFactory: (configService: ConfigService): RedisClient => {
    return new Redis(
      configService.get<RedisConfiguation>(REDIS_CFG).connection,
    );
  },
  provide: REDIS_CLIENT,
};
