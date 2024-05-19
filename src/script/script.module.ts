import { Module } from '@nestjs/common';

import { ScriptResolver } from './script.resolver';
import { ScriptService } from './script.service';

@Module({
  providers: [ScriptService, ScriptResolver],
})
export class ScriptModule {}
