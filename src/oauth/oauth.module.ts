import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthProviders } from '@prisma/client';

import { TokenModule } from '@/token/token.module';
import {
  UPDATE_LAST_LOGIN_QUEUE,
  UpdateLastLoginProcessor,
} from '@/user/queues';
import { UserService } from '@/user/user.service';

import { CommandHandlers } from './commands';
import { OAuthController } from './oauth.controller';
import { OAuthService } from './oauth.service';
import { OAuthStrategy } from './strategies';

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
    OAuthService,
    UserService,
    UpdateLastLoginProcessor,
    OAuthStrategy(AuthProviders.github),
    OAuthStrategy(AuthProviders.google),
  ],
  controllers: [OAuthController],
})
export class OAuthModule {}
