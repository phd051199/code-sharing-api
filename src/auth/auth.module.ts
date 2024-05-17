import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { TokenModule } from '@/token/token.module';
import {
  UPDATE_LAST_LOGIN_QUEUE,
  UpdateLastLoginProcessor,
} from '@/user/queues';

import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { CommandHandlers } from './commands';
import { JwtStrategy } from './strategies';

@Module({
  imports: [
    TokenModule,
    BullModule.registerQueue({
      name: UPDATE_LAST_LOGIN_QUEUE,
      prefix: 'auth',
    }),
    PassportModule.register({ session: false }),
  ],
  providers: [
    ...CommandHandlers,
    AuthResolver,
    AuthService,
    JwtStrategy,
    UpdateLastLoginProcessor,
  ],
  exports: [UpdateLastLoginProcessor],
})
export class AuthModule {}
