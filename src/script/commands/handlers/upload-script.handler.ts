import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { ScriptService } from '@/script/script.service';

import { UploadScriptCommand } from '../impl';

@CommandHandler(UploadScriptCommand)
export class UploadScriptCommandHandler
  implements ICommandHandler<UploadScriptCommand>
{
  constructor(private readonly scriptService: ScriptService) {}

  async execute(command: UploadScriptCommand): Promise<void> {
    await this.scriptService.uploadScript(
      command.scriptId,
      command.fileName,
      command.filePath,
      command.bundlePath,
    );
  }
}
