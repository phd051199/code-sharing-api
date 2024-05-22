import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MinioService as NestMinioService } from 'nestjs-minio-client';
import { type Readable } from 'stream';

@Injectable()
export class MinioService {
  public readonly baseBucket: string;

  constructor(
    private readonly minio: NestMinioService,
    readonly config: ConfigService,
  ) {
    this.baseBucket = config.get<string>('MINIO_BUCKET');
  }

  get client() {
    return this.minio.client;
  }

  async putObject(
    fileName: string,
    file: Buffer | Readable,
    baseBucket: string = this.baseBucket,
  ) {
    await this.minio.client.putObject(baseBucket, fileName, file);
  }

  async getPresignUrl(fileName: string, baseBucket: string = this.baseBucket) {
    const presignUrl = await this.minio.client.presignedGetObject(
      baseBucket,
      fileName,
    );

    return presignUrl;
  }

  async delete(objetName: string, baseBucket: string = this.baseBucket) {
    await this.client.removeObject(baseBucket, objetName);
  }
}
