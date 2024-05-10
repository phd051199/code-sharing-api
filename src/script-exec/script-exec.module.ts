import { Module } from '@nestjs/common';

import { ScriptExecService } from './script-exec.service';

@Module({
  providers: [ScriptExecService],
  exports: [ScriptExecService],
})
export class ScriptExecModule {}
