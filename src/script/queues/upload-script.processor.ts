import { Processor, WorkerHost } from '@nestjs/bullmq';
import { CommandBus } from '@nestjs/cqrs';
import { type Job } from 'bullmq';

import { UploadScriptCommand } from '../commands';

export const UPLOAD_SCRIPT_QUEUE = 'upload-script';

type UploadScriptJobType = {
  scriptId: number;
  fileName: string;
  bundlePath?: string;
  filePath?: string;
};

@Processor(UPLOAD_SCRIPT_QUEUE)
export class UploadScriptProcessor extends WorkerHost {
  constructor(private readonly commandBus: CommandBus) {
    super();
  }

  async process(job: Job<UploadScriptJobType>) {
    await this.commandBus.execute(
      new UploadScriptCommand(
        job.data.scriptId,
        job.data.fileName,
        job.data.filePath,
        job.data.bundlePath,
      ),
    );
  }
}
