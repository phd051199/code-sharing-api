import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { getTablesQuery } from './queries/impl/get-list-table.query';

@Controller('data-generator')
export class DataGeneratorController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('/tables')
  getTables() {
    return this.queryBus.execute(new getTablesQuery());
  }
}
