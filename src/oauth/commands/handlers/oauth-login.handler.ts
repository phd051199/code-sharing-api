import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { type AuthResponse } from '@/auth/models';
import { OAuthService } from '@/oauth/oauth.service';

import { OAuthLoginCommand } from '../impl';

@CommandHandler(OAuthLoginCommand)
export class OAuthLoginHandler implements ICommandHandler<OAuthLoginCommand> {
  constructor(private readonly oauthService: OAuthService) {}

  execute(command: OAuthLoginCommand): Promise<AuthResponse> {
    const {
      user: { email, displayName, provider },
    } = command;
    return this.oauthService.login(provider, email, displayName);
  }
}
