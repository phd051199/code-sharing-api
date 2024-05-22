import { Processor, WorkerHost } from '@nestjs/bullmq';
import { type Job } from 'bullmq';

import { ScriptService } from '../services';

export const BUILD_SCRIPT_QUEUE = 'build-script';

type BuildScriptJobType = {
  fileData: string | Buffer | NodeJS.ReadableStream;
  scriptId: number;
};

@Processor(BUILD_SCRIPT_QUEUE)
export class BuildScriptProcessor extends WorkerHost {
  constructor(private readonly scriptService: ScriptService) {
    super();
  }

  async process(job: Job<BuildScriptJobType>) {
    await this.scriptService.compileScript(
      job.data.fileData,
      job.data.scriptId,
    );
  }
}
