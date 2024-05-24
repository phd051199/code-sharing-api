import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthProviders } from '@prisma/client';

import { TokenModule } from '@/token/token.module';
import { UserService } from '@/user/services';

import { CommandHandlers } from './commands';
import { OAuthController } from './oauth.controller';
import { OAuthService } from './services';
import { OAuthStrategy } from './strategies';

@Module({
  imports: [TokenModule, PassportModule.register({ session: false })],
  providers: [
    ...CommandHandlers,
    OAuthService,
    UserService,
    OAuthStrategy(AuthProviders.github),
    OAuthStrategy(AuthProviders.google),
  ],
  controllers: [OAuthController],
})
export class OAuthModule {}
