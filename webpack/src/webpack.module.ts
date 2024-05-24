import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import {
  BUILD_SCRIPT_QUEUE,
  BuildScriptProcessor,
  UPLOAD_SCRIPT_QUEUE,
} from './queues';
import { ScriptService, WebpackService } from './services';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../.env',
      isGlobal: true,
    }),
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        connection: {
          host: configService.get<string>('REDIS_HOST'),
        },
      }),
    }),
    BullModule.registerQueue({
      name: BUILD_SCRIPT_QUEUE,
      prefix: 'script',
    }),
    BullModule.registerQueue({
      name: UPLOAD_SCRIPT_QUEUE,
      prefix: 'script',
    }),
  ],
  providers: [WebpackService, BuildScriptProcessor, ScriptService],
})
export class WebpackModule {}
