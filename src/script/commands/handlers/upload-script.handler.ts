import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { ScriptService } from '@/script/services';

import { UploadScriptCommand } from '../impl';

@CommandHandler(UploadScriptCommand)
export class UploadScriptCommandHandler
  implements ICommandHandler<UploadScriptCommand>
{
  constructor(private readonly scriptService: ScriptService) {}

  async execute(command: UploadScriptCommand): Promise<void> {
    const { scriptId, fileName, filePath, bundlePath } = command;
    await this.scriptService.uploadScript(scriptId, {
      fileName,
      filePath,
      bundlePath,
    });
  }
}
