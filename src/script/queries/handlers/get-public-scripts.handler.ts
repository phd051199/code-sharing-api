import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { ScriptService } from '@/script/services';

import { GetPublicScriptsQuery } from '../impl';

@QueryHandler(GetPublicScriptsQuery)
export class GetPublicScriptsQueryHandler
  implements IQueryHandler<GetPublicScriptsQuery>
{
  constructor(private readonly scriptService: ScriptService) {}

  execute() {
    return this.scriptService.getScripts();
  }
}
