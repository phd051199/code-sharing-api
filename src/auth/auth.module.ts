import { Module } from '@nestjs/common';

import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { CommandHandlers } from './commands/handlers';

@Module({
  providers: [...CommandHandlers, AuthResolver, AuthService],
})
export class AuthModule {}
