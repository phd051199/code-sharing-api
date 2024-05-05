import { Injectable } from '@nestjs/common';
import type { IQueryHandler } from '@nestjs/cqrs';
import { QueryHandler } from '@nestjs/cqrs';
import type { HealthCheckResult } from '@nestjs/terminus';
import { HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';

import { GetHealthQuery } from '../get-health.query';

@Injectable()
@QueryHandler(GetHealthQuery)
export class GetHealthHandler implements IQueryHandler<GetHealthQuery> {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  async execute(): Promise<HealthCheckResult> {
    return this.health.check([
      () => this.http.pingCheck('google', 'https://google.com'),
    ]);
  }
}
