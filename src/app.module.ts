import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

import type { IRedisConfiguation } from './config';
import {
  appConfiguration,
  redisConfiguration,
  typeormConfiguration,
} from './config';
import { ORM, REDIS } from './constants';
import { DataGeneratorModule } from './data-generator/data-generator.module';
import { validate } from './env.validation';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    CqrsModule.forRoot(),
    ConfigModule.forRoot({
      load: [appConfiguration, typeormConfiguration, redisConfiguration],
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
  ],
})
export class AppModule {}
