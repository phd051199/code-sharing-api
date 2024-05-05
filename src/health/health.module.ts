import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { HealthController } from './health.controller';
import { GetHealthHandler } from './query/handler/get-health.handler';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [HealthController],
  providers: [GetHealthHandler],
})
export class HealthModule {}
