import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';
import { Transport } from '@nestjs/microservices';
import {
  type HealthCheckResult,
  HealthCheckService,
  HttpHealthIndicator,
  MicroserviceHealthIndicator,
} from '@nestjs/terminus';

import { type IRedisConfiguation } from '@/config';
import { REDIS_CONF } from '@/constants';

import { CheckHealthCommand } from '../impl/check-health.command';

@Injectable()
@CommandHandler(CheckHealthCommand)
export class CheckHealthHandler implements ICommandHandler<CheckHealthCommand> {
  constructor(
    private readonly configService: ConfigService,
    private readonly health: HealthCheckService,
    private readonly http: HttpHealthIndicator,
    private readonly microservice: MicroserviceHealthIndicator,
  ) {}

  execute(): Promise<HealthCheckResult> {
    const pingUrl = 'http://google.com/generate_204';
    const redisConnection =
      this.configService.get<IRedisConfiguation>(REDIS_CONF).connection;

    return this.health.check([
      () => this.http.pingCheck('network', pingUrl),
      () =>
        this.microservice.pingCheck('redis', {
          transport: Transport.REDIS,
          options: redisConnection,
        }),
    ]);
  }
}
