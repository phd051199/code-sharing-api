import { HttpStatus } from '@nestjs/common';
import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';
import { type FastifyReply } from 'fastify';

import { type AuthResponse } from '@/auth/models';
import { OAuthService } from '@/oauth/oauth.service';

import { OAuthLoginCommand } from '../impl';

@CommandHandler(OAuthLoginCommand)
export class OAuthLoginHandler implements ICommandHandler<OAuthLoginCommand> {
  private redirectUrl = '/oauth/status';

  constructor(private readonly oauthService: OAuthService) {}

  async execute(command: OAuthLoginCommand): Promise<void> {
    const { user, res } = command;
    const token = await this.oauthService.login(
      user.provider,
      user.email,
      user.name,
    );
    this.setCookieAndRedirect(res, token, this.redirectUrl);
  }

  private setCookieAndRedirect(
    res: FastifyReply,
    token: AuthResponse,
    redirectUrl: string,
  ): void {
    const { accessToken, refreshToken } = token;
    res
      .cookie('accessToken', accessToken, {
        path: '/',
        httpOnly: true,
        secure: true,
      })
      .cookie('refreshToken', refreshToken, {
        path: '/',
        httpOnly: true,
        secure: true,
      })
      .status(HttpStatus.PERMANENT_REDIRECT)
      .redirect(redirectUrl);
  }
}
