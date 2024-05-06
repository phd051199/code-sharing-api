import { registerAs } from '@nestjs/config';

import { MINIO } from '../constants';
import type { MinioClientOptions } from './interfaces/minio.configuation.interface';

export const minioConfiguration = registerAs<MinioClientOptions>(MINIO, () => ({
  endPoint: process.env.MINIO_ENDPOINT,
  port: Number(process.env.MINIO_PORT),
  accessKey: process.env.MINIO_ACCESSKEY,
  secretKey: process.env.MINIO_SECRETKEY,
  useSSL: false,
}));
