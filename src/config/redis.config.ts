import { registerAs } from '@nestjs/config';

import { REDIS_CFG } from '../constants';

export interface IRedisConfiguation {
  readonly prefix?: string;
  readonly connection: {
    host: string;
    port: number;
    name?: string;
    password?: string;
  };
}

export const redisConfiguration = registerAs<IRedisConfiguation>(
  REDIS_CFG,
  () => ({
    prefix: 'bullmq_queue',
    connection: {
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT || 6379),
      password: process.env.REDIS_PASSWORD,
    },
  }),
);
