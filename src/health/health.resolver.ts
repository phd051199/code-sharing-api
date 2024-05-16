import { CommandBus } from '@nestjs/cqrs';
import { Query, Resolver } from '@nestjs/graphql';
import { HealthCheck } from '@nestjs/terminus';

import { CheckHealthCommand } from './commands';
import { HealthInfo } from './models';

@Resolver()
export class HealthResolver {
  constructor(private readonly commandBus: CommandBus) {}

  @HealthCheck()
  @Query(() => HealthInfo)
  healthCheck() {
    return this.commandBus.execute(new CheckHealthCommand());
  }
}
