import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule, type TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MinioModule } from 'nestjs-minio-client';

import {
  appConfiguration,
  type IRedisConfiguation,
  minioConfiguration,
  type MinioOptions,
  redisConfiguration,
  typeormConfiguration,
} from './config';
import { MINIO_CONF, ORM_CONF, REDIS_CONF } from './constants';
import { DataGeneratorModule } from './data-generator/data-generator.module';
import { EnvVars } from './env.validation';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    CqrsModule.forRoot(),
    ConfigModule.forRoot({
      load: [
        appConfiguration,
        typeormConfiguration,
        redisConfiguration,
        minioConfiguration,
      ],
      isGlobal: true,
      validate: EnvVars.validate,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: true,
      playground: false,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get<TypeOrmModuleOptions>(ORM_CONF),
    }),
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get<IRedisConfiguation>(REDIS_CONF),
    }),
    MinioModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get<MinioOptions>(MINIO_CONF),
    }),

    HealthModule,
    DataGeneratorModule,
  ],
})
export class AppModule {}
