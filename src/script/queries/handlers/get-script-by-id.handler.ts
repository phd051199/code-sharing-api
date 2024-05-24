import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { ScriptService } from '@/script/services';

import { GetScriptByIdQuery } from '../impl';

@QueryHandler(GetScriptByIdQuery)
export class GetScriptByIdQueryHandler
  implements IQueryHandler<GetScriptByIdQuery>
{
  constructor(private readonly scriptService: ScriptService) {}

  execute(query: GetScriptByIdQuery) {
    return this.scriptService.getScript(query.id);
  }
}
