import { registerAs } from '@nestjs/config';

import { MINIO_CFG } from '../constants';

export interface MinioOptions {
  readonly endPoint: string;
  readonly port: number;
  readonly accessKey: string;
  readonly secretKey: string;
  readonly useSSL?: boolean;
}

export const minioConfiguration = registerAs<MinioOptions>(MINIO_CFG, () => ({
  endPoint: process.env.MINIO_ENDPOINT,
  port: Number(process.env.MINIO_PORT),
  accessKey: process.env.MINIO_ACCESSKEY,
  secretKey: process.env.MINIO_SECRETKEY,
  useSSL: false,
}));
