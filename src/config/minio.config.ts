import { registerAs } from '@nestjs/config';

import { MINIO_CFG } from '../constants';
import { type MinioOptions } from './types';

export const minioConfiguration = registerAs<MinioOptions>(MINIO_CFG, () => ({
  endPoint: process.env.MINIO_ENDPOINT,
  port: Number(process.env.MINIO_PORT),
  accessKey: process.env.MINIO_ACCESSKEY,
  secretKey: process.env.MINIO_SECRETKEY,
  useSSL: false,
}));
