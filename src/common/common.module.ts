import { Global, Module } from '@nestjs/common';

import { CommonService } from './common.service';
import { LoggerService } from './logger';

@Global()
@Module({
  providers: [CommonService, LoggerService],
  exports: [CommonService, LoggerService],
})
export class CommonModule {}
