import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';

import { appConfiguration } from './app.configuration';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    CqrsModule.forRoot(),
    ConfigModule.forRoot({
      load: [appConfiguration],
      isGlobal: true,
    }),
    HealthModule,
  ],
})
export class AppModule {}
