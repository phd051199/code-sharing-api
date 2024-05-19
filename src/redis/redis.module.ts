import { CacheModule } from '@nestjs/cache-manager';
import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-yet';

import { type RedisConfiguation } from '@/config/types';
import { REDIS_CFG } from '@/constants';

import { redisProviders } from './redis.provider';
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
  providers: [RedisService, ...redisProviders],
  exports: [RedisService],
})
export class RedisModule {}
