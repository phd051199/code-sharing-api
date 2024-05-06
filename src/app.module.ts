import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import type { IRedisConfiguation } from './config';
import {
  appConfiguration,
  minioConfiguration,
  redisConfiguration,
  typeormConfiguration,
} from './config';
import { ORM, REDIS } from './constants';
import { DataGeneratorModule } from './data-generator/data-generator.module';
import { DataInjectorModule } from './data-injector/data-injector.module';
import { validate } from './env.validation';
import { HealthModule } from './health/health.module';
import { MinioClientModule } from './minio-client/minio-client.module';

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
      validate,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get<TypeOrmModuleOptions>(ORM),
    }),
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get<IRedisConfiguation>(REDIS),
    }),

    HealthModule,
    DataGeneratorModule,
    DataInjectorModule,
    MinioClientModule,
    AuthModule,
  ],
})
export class AppModule {}
