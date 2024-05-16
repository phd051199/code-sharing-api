import { Module } from '@nestjs/common';

import { UserScriptService } from './user-script.service';

@Module({
  providers: [UserScriptService],
})
export class UserScriptModule {}
