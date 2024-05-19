import { type Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

import { type RedisConfiguation } from '@/config/types';
import { REDIS_CFG, REDIS_CLIENT } from '@/constants';

export type RedisClient = Redis;

export const redisProviders: Provider[] = [
  {
    inject: [ConfigService],
    useFactory: (configService: ConfigService): RedisClient => {
      const { connection } = configService.get<RedisConfiguation>(REDIS_CFG);
      return new Redis(connection);
    },
    provide: REDIS_CLIENT,
  },
];
