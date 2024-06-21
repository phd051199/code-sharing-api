import { BadRequestException, Injectable } from '@nestjs/common';
import { BuildStatus, type Script } from '@prisma/client';
import dayjs from 'dayjs';
import { createReadStream } from 'fs';
import { rm } from 'fs/promises';
import { join } from 'path';

import { streamToString } from '@/common/utils/string.util';
import { type ScriptUncheckedCreateInput } from '@/gql/script';
import { MinioService } from '@/minio/minio.service';
import { PrismaService } from '@/prisma/prisma.service';

import { type UpdateScriptDto, type UploadScriptDto } from '../dtos';

@Injectable()
export class ScriptService {
  constructor(
    private readonly minio: MinioService,
    private readonly prisma: PrismaService,
  ) {}

  async getScript(id: number) {
    const result = await this.prisma.script.findUniqueOrThrow({
      where: {
        id,
      },
      select: {
        id: true,
        path: true,
        bundleDetail: {
          select: {
            status: true,
            bundlePath: true,
          },
        },
      },
    });

    this.handleGetScriptError(result.bundleDetail.status);

    const [fileUrl, bundleUrl] = await Promise.all([
      this.minio.getPresignUrl(result.path),
      this.minio.getPresignUrl(result.bundleDetail.bundlePath),
    ]);

    return { fileUrl, bundleUrl };
  }

  async getScripts(userId?: number): Promise<Script[]> {
    const findOptions = {
      where: {
        authorId: userId,
        bundleDetail: {
          status: BuildStatus.success,
        },
      },
    };

    const scripts = await this.prisma.script.findMany({
      include: {
        user: {
          select: {
            userName: true,
          },
        },
        bundleDetail: { select: { bundlePath: true } },
      },
      ...findOptions,
    });

    const result = await Promise.all(
      scripts.map(async (script) => {
        const [fileUrl, bundleUrl] = await Promise.all([
          this.minio.getPresignUrl(script.path),
          this.minio.getPresignUrl(script.bundleDetail.bundlePath),
        ]);

        const file = await this.minio.getObject(script.path);
        const scriptContent = await streamToString(file);

        return {
          ...script,
          fileUrl,
          bundleUrl,
          scriptContent,
        };
      }),
    );

    return result;
  }

  private handleGetScriptError(status: BuildStatus) {
    switch (status) {
      case BuildStatus.waiting:
      case BuildStatus.running:
        throw new BadRequestException('Script is compiling');
      case BuildStatus.failed:
        throw new BadRequestException('Script compilation failed');
      default:
        return;
    }
  }

  async createScript(
    data: ScriptUncheckedCreateInput,
    userId: number,
  ): Promise<Script> {
    const result = await this.prisma.script.create({
      data: {
        ...data,
        authorId: userId,
        bundleDetail: {
          create: {
            status: BuildStatus.waiting,
          },
        },
      },
    });

    return result;
  }

  async updateScript(id: number, data: UpdateScriptDto): Promise<void> {
    await this.prisma.script.update({
      where: {
        id,
      },
      data: {
        path: data.path,
        bundleDetail: {
          update: {
            bundlePath: data.bundle,
            status: data.status,
          },
        },
      },
    });
  }

  async uploadScript(scriptId: number, data: UploadScriptDto): Promise<void> {
    try {
      const { fileName, filePath, bundlePath } = data;

      const minioDirPath = dayjs().format('YYYY/MM/DD/');
      const minioFilePath = minioDirPath + fileName + '.js';
      const minioBundlePath = minioDirPath + fileName + '.bundle.js';

      const cleanup = async () =>
        await rm(join(filePath, '..'), { recursive: true, force: true });

      const file = createReadStream(filePath);
      const bundle = createReadStream(bundlePath);

      await Promise.all([
        this.minio.putObject(minioFilePath, file),
        this.minio.putObject(minioBundlePath, bundle),
      ]);

      await this.updateScript(scriptId, {
        path: minioFilePath,
        bundle: minioBundlePath,
        status: BuildStatus.success,
      });

      await cleanup();
    } catch (error) {
      console.log(error);

      throw error;
    }
  }

  getFavoriteScripts(userId: number): Promise<Script[]> {
    return this.prisma.script.findMany({
      where: {
        userFavorite: {
          some: {
            userId,
          },
        },
      },
    });
  }

  async addToFavorite(userId: number, scriptId: number): Promise<void> {
    try {
      await this.prisma.userFavorite.create({
        data: {
          user: {
            connect: { id: userId },
          },
          script: {
            connect: { id: scriptId },
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async removeFromFavorite(userId: number, scriptId: number): Promise<void> {
    try {
      await this.prisma.userFavorite.deleteMany({
        where: {
          userId,
          scriptId,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
