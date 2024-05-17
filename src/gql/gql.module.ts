import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { formatGqlError } from '@/validation/validation.util';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
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
    }),
  ],
})
export class GqlModule {}
