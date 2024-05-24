import { InjectQueue } from '@nestjs/bullmq';
import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';
import { Queue } from 'bullmq';

import { CompileScriptCommand } from '../impl';

const BUILD_SCRIPT_QUEUE = 'build-script';

@CommandHandler(CompileScriptCommand)
export class CompileScriptCommandHandler
  implements ICommandHandler<CompileScriptCommand>
{
  constructor(
    @InjectQueue(BUILD_SCRIPT_QUEUE)
    private readonly buildScriptQueue: Queue,
  ) {}

  async execute(command: CompileScriptCommand): Promise<void> {
    await this.buildScriptQueue.add(
      BUILD_SCRIPT_QUEUE,
      {
        filePath: command.filePath,
        scriptId: command.script.id,
        userId: command.script.authorId,
      },
      // { priority },
    );
  }
}
