import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { ScriptService } from '@/script/services';

import { GetFavoriteScriptsQuery } from '../impl';

@QueryHandler(GetFavoriteScriptsQuery)
export class GetFavoriteScriptsQueryHandler
  implements IQueryHandler<GetFavoriteScriptsQuery>
{
  constructor(private readonly scriptService: ScriptService) {}

  async execute(query: GetFavoriteScriptsQuery) {
    return this.scriptService.getFavoriteScripts(query.userId);
  }
}
