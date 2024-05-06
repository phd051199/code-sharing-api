import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { HealthController } from './health.controller';
import { QueryHandlers } from './queries/handlers';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [HealthController],
  providers: [...QueryHandlers, ...CommandHandlers, ...EventHandlers],
})
export class HealthModule {}
