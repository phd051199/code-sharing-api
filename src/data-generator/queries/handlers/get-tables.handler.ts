import { Injectable } from '@nestjs/common';
import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { InfoSchemaRepository } from '../../repositories/info-schema.repository';
import { GetTablesQuery } from '../impl/get-tables.query';

@Injectable()
@QueryHandler(GetTablesQuery)
export class GetTablesHandler implements IQueryHandler<GetTablesQuery> {
  constructor(private readonly infoSchema: InfoSchemaRepository) {}

  execute() {
    return this.infoSchema.getTables();
  }
}
