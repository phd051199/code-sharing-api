import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';

import { MinioModule } from '@/minio/minio.module';

import { CommandHandlers } from './commands';
import { QueryHandlers } from './queries';
import {
  BUILD_SCRIPT_QUEUE,
  UPLOAD_SCRIPT_QUEUE,
  UploadScriptProcessor,
} from './queues';
import { ScriptController } from './script.controller';
import { ScriptService } from './services';

@Module({
  imports: [
    MinioModule,
    BullModule.registerQueue({
      name: BUILD_SCRIPT_QUEUE,
      prefix: 'script',
    }),
    BullModule.registerQueue({
      name: UPLOAD_SCRIPT_QUEUE,
      prefix: 'script',
    }),
  ],
  providers: [
    ...QueryHandlers,
    ...CommandHandlers,
    ScriptService,
    UploadScriptProcessor,
  ],
  controllers: [ScriptController],
})
export class ScriptModule {}
