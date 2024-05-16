import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { BullModule } from '@nestjs/bullmq';
import { CacheModule } from '@nestjs/cache-manager';
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { CqrsModule } from '@nestjs/cqrs';
import { GraphQLModule } from '@nestjs/graphql';
import { ScheduleModule } from '@nestjs/schedule';
import { MinioModule } from 'nestjs-minio-client';
import { join } from 'path';

import { RolesGuard } from '@/auth/guards';
import { gqlContext } from '@/common/utils';
import { type MinioOptions, type RedisConfiguation } from '@/config/types';
import { MINIO_CFG, REDIS_CFG } from '@/constants';
import { TokenService } from '@/token/token.service';
import { ValidationPipe } from '@/validation/validation.pipe';
import { formatGqlError } from '@/validation/validation.util';

import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from './config/config.module';
import { HealthModule } from './health/health.module';
import { OAuthModule } from './oauth/oauth.module';
import { PrismaModule } from './prisma/prisma.module';
import { RedisModule } from './redis/redis.module';
import { ScriptModule } from './script/script.module';
import { ScriptExecModule } from './script-exec/script-exec.module';
import { TokenModule } from './token/token.module';
import { UserModule } from './user/user.module';
import { UserScriptModule } from './user-script/user-script.module';
import { WebpackModule } from './webpack/webpack.module';

@Module({
  imports: [
    CqrsModule.forRoot(),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [TokenModule],
      inject: [TokenService],
      useFactory: (tokenService: TokenService) => ({
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        autoSchemaFile: join(process.cwd(), 'src/gql/schema.gql'),
        playground: false,
        subscriptions: {
          'graphql-ws': true,
        },
        autoTransformHttpErrors: true,
        buildSchemaOptions: {
          numberScalarMode: 'integer',
        },
        formatError: formatGqlError,
        context: (req: Request) => gqlContext(req, tokenService),
      }),
    }),
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
    UserScriptModule,
    ScriptExecModule,
    RedisModule,
    OAuthModule,
    ScriptModule,
    CommonModule,
    WebpackModule,
    ConfigModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
