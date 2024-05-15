import { Module } from '@nestjs/common';

import { OAuthController } from './oauth.controller';
import { GithubOAuthService } from './services/github.service';
import { GoogleOAuthService } from './services/google.service';

@Module({
  providers: [GithubOAuthService, GoogleOAuthService],
  controllers: [OAuthController],
})
export class OAuthModule {}
