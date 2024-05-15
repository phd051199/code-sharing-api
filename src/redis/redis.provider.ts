import { type Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

import { type IRedisConfiguation } from '@/config';
import { REDIS_CFG, REDIS_CLIENT } from '@/constants';

export type RedisClient = Redis;

export const redisProvider: Provider = {
  inject: [ConfigService],
  useFactory: (configService: ConfigService): RedisClient => {
    return new Redis(
      configService.get<IRedisConfiguation>(REDIS_CFG).connection,
    );
  },
  provide: REDIS_CLIENT,
};
