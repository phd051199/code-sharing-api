import { registerAs } from '@nestjs/config';

import { REDIS_CFG } from '@/constants';

import { type RedisConfiguation } from '../types';

export const redisConfiguration = registerAs<RedisConfiguation>(
  REDIS_CFG,
  () => ({
    connection: {
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT || 6379),
      password: process.env.REDIS_PASSWORD,
    },
  }),
);
