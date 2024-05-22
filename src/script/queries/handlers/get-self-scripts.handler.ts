import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { ScriptService } from '@/script/script.service';

import { GetSelfScriptsQuery } from '../impl';

@QueryHandler(GetSelfScriptsQuery)
export class GetSelfScriptsQueryHandler
  implements IQueryHandler<GetSelfScriptsQuery>
{
  constructor(private readonly scriptService: ScriptService) {}

  execute(query: GetSelfScriptsQuery) {
    return this.scriptService.getScripts(query.userId);
  }
}
