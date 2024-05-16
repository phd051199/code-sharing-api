import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { TokenModule } from '@/token/token.module';
import {
  update_last_login_queue,
  UpdateLastLoginProcessor,
} from '@/user/queues';
import { UserService } from '@/user/user.service';

import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { CommandHandlers } from './commands';
import { JwtStrategy } from './strategies';

@Module({
  imports: [
    TokenModule,
    BullModule.registerQueue({
      name: update_last_login_queue,
      prefix: 'auth',
    }),
    PassportModule.register({ session: false }),
  ],
  providers: [
    ...CommandHandlers,
    AuthResolver,
    AuthService,
    UserService,
    JwtStrategy,
    UpdateLastLoginProcessor,
  ],
  exports: [UpdateLastLoginProcessor],
})
export class AuthModule {}
