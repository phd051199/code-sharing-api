import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';
import { Transport } from '@nestjs/microservices';
import {
  type HealthCheckResult,
  HealthCheckService,
  HttpHealthIndicator,
  MicroserviceHealthIndicator,
  PrismaHealthIndicator,
} from '@nestjs/terminus';
import { PrismaClient } from '@prisma/client';

import { type RedisConfiguation } from '@/config/types';
import { REDIS_CFG } from '@/constants';

import { CheckHealthCommand } from '../impl/check-health.command';

@Injectable()
@CommandHandler(CheckHealthCommand)
export class CheckHealthCommandHandler
  implements ICommandHandler<CheckHealthCommand>
{
  constructor(
    private readonly configService: ConfigService,
    private readonly health: HealthCheckService,
    private readonly http: HttpHealthIndicator,
    private readonly microservice: MicroserviceHealthIndicator,
    private readonly prisma: PrismaHealthIndicator,
  ) {}

  execute(): Promise<HealthCheckResult> {
    const pingUrl = 'http://google.com/generate_204';
    const redisConnection =
      this.configService.get<RedisConfiguation>(REDIS_CFG).connection;

    return this.health.check([
      () => this.http.pingCheck('network', pingUrl),
      () =>
        this.microservice.pingCheck('redis', {
          transport: Transport.REDIS,
          options: redisConnection,
        }),
      () => this.prisma.pingCheck('prisma', new PrismaClient()),
    ]);
  }
}
