import { InjectQueue } from '@nestjs/bullmq';
import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';
import { Queue } from 'bullmq';

import { BUILD_SCRIPT_QUEUE } from '../../queues';
import { CompileScriptCommand } from '../impl';

@CommandHandler(CompileScriptCommand)
export class CompileScriptCommandHandler
  implements ICommandHandler<CompileScriptCommand>
{
  constructor(
    @InjectQueue(BUILD_SCRIPT_QUEUE)
    private readonly buildScriptQueue: Queue,
  ) {}

  async execute(command: CompileScriptCommand): Promise<void> {
    await this.buildScriptQueue.add(BUILD_SCRIPT_QUEUE, {
      fileData: command.fileData.toString(),
      scriptId: command.scriptId,
    });
  }
}
