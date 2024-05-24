import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq';
import { BuildStatus } from '@prisma/client';
import { type Job } from 'bullmq';

import { ScriptService } from '../services';

export const BUILD_SCRIPT_QUEUE = 'build-script';

type BuildScriptJobType = {
  filePath: string;
  scriptId: number;
};

@Processor(BUILD_SCRIPT_QUEUE)
export class BuildScriptProcessor extends WorkerHost {
  constructor(private readonly scriptService: ScriptService) {
    super();
  }

  async process(job: Job<BuildScriptJobType>) {
    await this.scriptService.compileScript(
      job.data.filePath,
      job.data.scriptId,
    );
  }

  @OnWorkerEvent('active')
  async onActive(job: Job<BuildScriptJobType>) {
    await this.scriptService.updateScriptStatus(
      job.data.scriptId,
      BuildStatus.running,
    );
  }

  @OnWorkerEvent('completed')
  async onCompleted(job: Job<BuildScriptJobType>) {
    await this.scriptService.updateScriptStatus(
      job.data.scriptId,
      BuildStatus.uploading,
    );
  }

  @OnWorkerEvent('failed')
  async onFailed(job: Job<BuildScriptJobType>, err: Error) {
    await this.scriptService.updateScriptStatus(
      job.data.scriptId,
      BuildStatus.failed,
      err.message,
    );
  }
}
