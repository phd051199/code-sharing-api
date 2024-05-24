import { CacheModule } from '@nestjs/cache-manager';
import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-yet';
import Redis from 'ioredis';

import { type RedisConfiguation } from '@/config/types';
import { REDIS_CFG, REDIS_CLIENT } from '@/constants';

import { RedisService } from './redis.service';

@Global()
@Module({
  imports: [
    CacheModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const { connection } = configService.get<RedisConfiguation>(REDIS_CFG);
        return {
          store: await redisStore({
            socket: connection,
          }),
        };
      },
      isGlobal: true,
    }),
  ],
  providers: [
    RedisService,
    {
      inject: [ConfigService],
      useFactory: (configService: ConfigService): Redis => {
        const { connection } = configService.get<RedisConfiguation>(REDIS_CFG);
        return new Redis(connection);
      },
      provide: REDIS_CLIENT,
    },
  ],
  exports: [RedisService],
})
export class RedisModule {}
