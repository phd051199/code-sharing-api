import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import type { HealthCheckResult } from '@nestjs/terminus';
import { HealthCheck } from '@nestjs/terminus';

import { GetHealthQuery } from './query';

@Controller('health')
export class HealthController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  @HealthCheck()
  check(): Promise<HealthCheckResult> {
    return this.queryBus.execute(new GetHealthQuery());
  }
}
