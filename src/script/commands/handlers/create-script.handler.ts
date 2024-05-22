import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';
import { type Script } from '@prisma/client';

import { ScriptService } from '@/script/script.service';

import { CreateScriptCommand } from '../impl';

@CommandHandler(CreateScriptCommand)
export class CreateScriptCommandHandler
  implements ICommandHandler<CreateScriptCommand>
{
  constructor(private readonly scriptService: ScriptService) {}

  async execute(command: CreateScriptCommand): Promise<Script> {
    return this.scriptService.createScript(command.userId);
  }
}
