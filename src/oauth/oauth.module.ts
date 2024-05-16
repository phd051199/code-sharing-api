import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { TokenModule } from '@/token/token.module';
import {
  update_last_login_queue,
  UpdateLastLoginProcessor,
} from '@/user/queues';
import { UserService } from '@/user/user.service';

import { CommandHandlers } from './commands';
import { OAuthController } from './oauth.controller';
import { OAuthService } from './oauth.service';
import { GoogleStrategy } from './strategies/google.strategy';

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
    OAuthService,
    UserService,
    UpdateLastLoginProcessor,
    GoogleStrategy,
  ],
  controllers: [OAuthController],
})
export class OAuthModule {}
