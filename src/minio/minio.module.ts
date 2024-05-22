import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MinioModule as NestMinioModule } from 'nestjs-minio-client';

import { type MinioOptions } from '@/config/types';
import { MINIO_CFG } from '@/constants';

import { MinioService } from './minio.service';

@Module({
  imports: [
    NestMinioModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get<MinioOptions>(MINIO_CFG),
    }),
  ],
  providers: [MinioService],
  exports: [MinioService],
})
export class MinioModule {}
