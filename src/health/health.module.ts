import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';

import { CommandHandlers } from './commands/handlers';
import { HealthResolver } from './health.resolver';

@Module({
  imports: [TerminusModule, HttpModule, ConfigModule],
  providers: [...CommandHandlers, HealthResolver],
})
export class HealthModule {}
