import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { type BuildStatus, PrismaClient } from '@prisma/client';
import { Queue } from 'bullmq';

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

  async compileScript(tempPath: string, scriptId: number) {
    try {
      const { hash, bundle } = await this.webpack.compile(tempPath);

      await this.uploadScriptQueue.add(UPLOAD_SCRIPT_QUEUE, {
        scriptId,
        fileName: hash,
        filePath: tempPath,
        bundlePath: bundle,
      });
    } catch (error) {
      throw error;
    }
  }

  async updateScriptStatus(
    scriptId: number,
    status: BuildStatus,
    error?: string,
  ) {
    try {
      await this.prisma.bundleDetail.update({
        where: {
          scriptId,
        },
        data: {
          status,
          failedReason: error,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
