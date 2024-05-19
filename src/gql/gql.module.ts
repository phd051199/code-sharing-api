import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';

import { formatGqlError } from '@/validation/validation.util';

import { GqlExceptionFilter } from './gql-exception.filter';

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
  ],
})
export class GqlModule {}
