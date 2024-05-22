import { Injectable, NotFoundException } from '@nestjs/common';
import { ScriptStatus } from '@prisma/client';
import dayjs from 'dayjs';
import { createReadStream, rmSync } from 'fs';
import { join } from 'path';

import { MinioService } from '@/minio/minio.service';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class ScriptService {
  constructor(
    private readonly minio: MinioService,
    private readonly prisma: PrismaService,
  ) {}

  async getScript(id: number) {
    const result = await this.prisma.script
      .findUniqueOrThrow({
        where: {
          id,
        },
      })
      .catch((err) => {
        throw err;
      });

    const [fileUrl, bundleUrl] = await Promise.all([
      this.minio.getPresignUrl(result.path),
      this.minio.getPresignUrl(result.bundle),
    ]);

    if (!fileUrl || !bundleUrl) {
      throw new NotFoundException();
    }

    return { fileUrl, bundleUrl };
  }

  async getScripts(userId: number) {
    return this.prisma.script.findMany({
      where: {
        user_id: userId,
      },
    });
  }

  createScript(userId: number) {
    return this.prisma.script.create({
      data: {
        user_id: userId,
        status: ScriptStatus.waiting,
      },
    });
  }

  async updateScript(id: number, data: { bundle?: string; path?: string }) {
    await this.prisma.script.update({
      where: {
        id,
      },
      data,
    });
  }

  async uploadScript(
    scriptId: number,
    fileName: string,
    filePath: string,
    bundlePath: string,
  ) {
    const minioDirPath = dayjs().format('YYYY/MM/DD/');
    const minioFilePath = minioDirPath + fileName + '.js';
    const minioBundlePath = minioDirPath + fileName + '.bundle.js';

    const cleanup = () =>
      rmSync(join(filePath, '..'), { recursive: true, force: true });

    const file = createReadStream(filePath).on('end', cleanup);
    const bundle = createReadStream(bundlePath).on('end', cleanup);

    await Promise.all([
      this.minio.putObject(minioFilePath, file),
      this.minio.putObject(minioBundlePath, bundle),
    ]);

    this.updateScript(scriptId, {
      path: minioFilePath,
      bundle: minioBundlePath,
    });
  }
}
