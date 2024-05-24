import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { RedisPubSub } from 'graphql-redis-subscriptions';

import { type RedisConfiguation } from '@/config/types';
import { PUB_SUB, REDIS_CFG } from '@/constants';
import { formatGqlError } from '@/validation/validation.util';

import { GqlExceptionFilter } from './gql-exception.filter';

@Global()
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: true,
      playground: false,
      subscriptions: {
        'graphql-ws': true,
      },
      autoTransformHttpErrors: true,
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
      formatError: formatGqlError,
    }),
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GqlExceptionFilter,
    },
    {
      provide: PUB_SUB,
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        return new RedisPubSub(configService.get<RedisConfiguation>(REDIS_CFG));
      },
    },
  ],
  exports: [PUB_SUB],
})
export class GqlModule {}
