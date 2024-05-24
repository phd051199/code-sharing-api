import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { ScriptService } from '@/script/services';

import { UpdateScriptCommand } from '../impl';

@CommandHandler(UpdateScriptCommand)
export class UpdateScriptCommandHandler
  implements ICommandHandler<UpdateScriptCommand>
{
  constructor(private readonly scriptService: ScriptService) {}

  async execute(command: UpdateScriptCommand): Promise<void> {
    await this.scriptService.updateScript(command.id, {
      bundle: command.bundle,
      path: command.path,
    });
  }
}
