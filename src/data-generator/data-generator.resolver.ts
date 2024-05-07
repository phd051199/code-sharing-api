import { QueryBus } from '@nestjs/cqrs';
import { Query, Resolver } from '@nestjs/graphql';

import { GetTablesQuery } from './queries/impl/get-tables.query';

@Resolver()
export class DataGeneratorResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query(() => [String])
  getTables() {
    return this.queryBus.execute(new GetTablesQuery());
  }
}
