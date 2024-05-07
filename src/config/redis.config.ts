import { registerAs } from '@nestjs/config';

import { REDIS_CONF } from '../constants';

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
  REDIS_CONF,
  () => ({
    prefix: 'bullmq_queue',
    connection: {
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
      password: process.env.REDIS_PASSWORD,
    },
  }),
);
