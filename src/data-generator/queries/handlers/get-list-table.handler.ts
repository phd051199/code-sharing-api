import { Injectable } from '@nestjs/common';
import type { IQueryHandler } from '@nestjs/cqrs';
import { QueryHandler } from '@nestjs/cqrs';

import { InfoSchemaRepository } from '../../repositories/info-schema.repository';
import { getTablesQuery } from '../impl/get-list-table.query';

@Injectable()
@QueryHandler(getTablesQuery)
export class getTablesHandler implements IQueryHandler<getTablesQuery> {
  constructor(private readonly infoSchema: InfoSchemaRepository) {}

  execute() {
    return this.infoSchema.getTables();
  }
}
