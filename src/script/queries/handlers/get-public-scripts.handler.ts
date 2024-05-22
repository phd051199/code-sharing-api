import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { ScriptService } from '@/script/script.service';

import { GetPublicScriptsQuery } from '../impl';

@QueryHandler(GetPublicScriptsQuery)
export class GetPublicScriptsQueryHandler
  implements IQueryHandler<GetPublicScriptsQuery>
{
  constructor(private readonly scriptService: ScriptService) {}

  async execute(query: GetPublicScriptsQuery) {
    console.log('query', query);

    throw new Error('Method not implemented.');
  }
}
