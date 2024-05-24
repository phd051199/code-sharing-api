import { BullModule } from '@nestjs/bullmq';
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CqrsModule } from '@nestjs/cqrs';

import { LoggingInterceptor } from '@/common/logger';
import { type RedisConfiguation } from '@/config/types';
import { REDIS_CFG } from '@/constants';

import { AuthModule } from './auth/auth.module';
import { CaslModule } from './casl/casl.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from './config/config.module';
import { GqlModule } from './gql/gql.module';
import { HealthModule } from './health/health.module';
import { MinioModule } from './minio/minio.module';
import { OAuthModule } from './oauth/oauth.module';
import { PrismaModule } from './prisma/prisma.module';
import { RedisModule } from './redis/redis.module';
import { ScriptModule } from './script/script.module';
import { UserModule } from './user/user.module';
import { ValidationModule } from './validation/validation.module';

@Module({
  imports: [
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get<RedisConfiguation>(REDIS_CFG),
    }),

    CqrsModule.forRoot(),
    HealthModule,
    AuthModule,
    UserModule,
    PrismaModule,
    RedisModule,
    OAuthModule,
    CommonModule,
    ConfigModule,
    CaslModule,
    ValidationModule,
    GqlModule,
    ScriptModule,
    MinioModule,
    CommonModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
