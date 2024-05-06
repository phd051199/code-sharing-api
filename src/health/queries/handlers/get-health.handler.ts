import { Injectable } from '@nestjs/common';
import type { IQueryHandler } from '@nestjs/cqrs';
import { QueryHandler } from '@nestjs/cqrs';
import type { HealthCheckResult } from '@nestjs/terminus';
import {
  HealthCheckService,
  HttpHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';

import { GetHealthQuery } from '../impl/get-health.query';

@Injectable()
@QueryHandler(GetHealthQuery)
export class GetHealthHandler implements IQueryHandler<GetHealthQuery> {
  constructor(
    private readonly health: HealthCheckService,
    private readonly http: HttpHealthIndicator,
    private readonly db: TypeOrmHealthIndicator,
  ) {}

  async execute(): Promise<HealthCheckResult> {
    return this.health.check([
      () => this.http.pingCheck('google', 'https://google.com'),
      () => this.db.pingCheck('DATA_SOURCE'),
    ]);
  }
}
