import { registerAs } from '@nestjs/config';

import { REDIS } from '../constants';
import type { IRedisConfiguation } from './interfaces/redis.configuation.interface';

export const redisConfiguration = registerAs<IRedisConfiguation>(REDIS, () => ({
  prefix: 'bullmq_queue',
  connection: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASSWORD,
  },
}));
