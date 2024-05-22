import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { PrismaClient, ScriptStatus } from '@prisma/client';
import { Queue } from 'bullmq';
import { mkdtemp } from 'fs/promises';
import { tmpdir } from 'os';
import { join } from 'path';

import { WebpackService } from './webpack.service';

type UploadScriptJobType = {
  scriptId: number;
  fileName: string;
  bundlePath?: string;
  filePath?: string;
};

const UPLOAD_SCRIPT_QUEUE = 'upload-script';

@Injectable()
export class ScriptService {
  private readonly prisma: PrismaClient;

  constructor(
    private readonly webpack: WebpackService,

    @InjectQueue(UPLOAD_SCRIPT_QUEUE)
    private readonly uploadScriptQueue: Queue<UploadScriptJobType>,
  ) {
    this.prisma = new PrismaClient();
  }

  async compileScript(
    fileData: string | Buffer | NodeJS.ReadableStream,
    scriptId: number,
  ) {
    try {
      await this.updateScriptStatus(scriptId, ScriptStatus.running);
      const tempDir = await mkdtemp(join(tmpdir(), 'webpack-'));

      const { hash, bundle, file } = await this.webpack.compile(
        fileData,
        tempDir,
      );

      this.updateScriptStatus(scriptId, ScriptStatus.success);

      await this.uploadScriptQueue.add(UPLOAD_SCRIPT_QUEUE, {
        scriptId,
        fileName: hash,
        filePath: file,
        bundlePath: bundle,
      });
    } catch (error) {
      this.updateScriptStatus(scriptId, ScriptStatus.failed, error.message);
    }
  }

  private async updateScriptStatus(
    scriptId: number,
    status: ScriptStatus,
    error?: string,
  ) {
    await this.prisma.script.update({
      where: {
        id: scriptId,
      },
      data: {
        status,
        failed_reason: error,
      },
    });
  }
}
