import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MinioModule } from 'nestjs-minio-client';

import type { MinioClientOptions } from '../config';
import { MINIO } from '../constants';
import { MinioClientService } from './minio-client.service';

@Module({
  imports: [
    MinioModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get<MinioClientOptions>(MINIO),
    }),
  ],
  providers: [MinioClientService],
  exports: [MinioClientService],
})
export class MinioClientModule {}
