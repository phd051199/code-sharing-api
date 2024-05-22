import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { ScriptService } from '@/script/script.service';

import { GetFavoriteScriptsQuery } from '../impl';

@QueryHandler(GetFavoriteScriptsQuery)
export class GetFavoriteScriptsQueryHandler
  implements IQueryHandler<GetFavoriteScriptsQuery>
{
  constructor(private readonly scriptService: ScriptService) {}

  async execute(query: GetFavoriteScriptsQuery) {
    console.log('query', query);

    throw new Error('Method not implemented.');
  }
}
