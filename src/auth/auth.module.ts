import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';

import { TokenModule } from '@/token/token.module';
import { UserService } from '@/user/user.service';

import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { CommandHandlers } from './commands';
import { update_last_login_queue, UpdateLastLoginProcessor } from './queues';
import { JwtStrategy } from './strategies';

@Module({
  imports: [
    TokenModule,
    BullModule.registerQueue({
      name: update_last_login_queue,
      prefix: 'auth',
    }),
  ],
  providers: [
    ...CommandHandlers,
    AuthResolver,
    AuthService,
    UserService,
    JwtStrategy,
    UpdateLastLoginProcessor,
  ],
})
export class AuthModule {}
