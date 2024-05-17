import { BullModule } from '@nestjs/bullmq';
import { CacheModule } from '@nestjs/cache-manager';
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CqrsModule } from '@nestjs/cqrs';
import { ScheduleModule } from '@nestjs/schedule';
import { MinioModule } from 'nestjs-minio-client';

import { type MinioOptions, type RedisConfiguation } from '@/config/types';
import { MINIO_CFG, REDIS_CFG } from '@/constants';

import { AuthModule } from './auth/auth.module';
import { CaslModule } from './casl/casl.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from './config/config.module';
import { GqlModule } from './gql/gql.module';
import { HealthModule } from './health/health.module';
import { OAuthModule } from './oauth/oauth.module';
import { PrismaModule } from './prisma/prisma.module';
import { RedisModule } from './redis/redis.module';
import { ScriptModule } from './script/script.module';
import { UserModule } from './user/user.module';
import { ValidationModule } from './validation/validation.module';
import { WebpackModule } from './webpack/webpack.module';

@Module({
  imports: [
    CqrsModule.forRoot(),
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get<RedisConfiguation>(REDIS_CFG),
    }),
    MinioModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get<MinioOptions>(MINIO_CFG),
    }),
    ScheduleModule.forRoot(),
    CacheModule.registerAsync<RedisConfiguation>({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...configService.get<RedisConfiguation>(REDIS_CFG),
        isGlobal: true,
      }),
    }),

    HealthModule,
    AuthModule,
    UserModule,
    PrismaModule,
    RedisModule,
    OAuthModule,
    CommonModule,
    WebpackModule,
    ConfigModule,
    CaslModule,
    ValidationModule,
    GqlModule,
    ScriptModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
