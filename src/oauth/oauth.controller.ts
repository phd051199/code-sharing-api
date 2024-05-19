import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { AuthGuard } from '@nestjs/passport';
import { AuthProviders } from '@prisma/client';
import { FastifyReply, FastifyRequest } from 'fastify';

import { Public } from '@/auth/decorators';
import { type AuthResponse } from '@/auth/models';

import { OAuthLoginCommand } from './commands';

@Public()
@Controller('oauth2')
export class OAuthController {
  private readonly redirectUrl = '/oauth2/status';

  constructor(private readonly commandBus: CommandBus) {}

  @Get('google')
  @UseGuards(AuthGuard(AuthProviders.google))
  google() {}

  @Get('google/callback')
  @HttpCode(HttpStatus.PERMANENT_REDIRECT)
  @UseGuards(AuthGuard(AuthProviders.google))
  async googleCallback(@Req() req: FastifyRequest, @Res() res: FastifyReply) {
    await this.handleCallback(req, res);
  }

  @Get('github')
  @UseGuards(AuthGuard(AuthProviders.github))
  github() {}

  @Get('github/callback')
  @HttpCode(HttpStatus.PERMANENT_REDIRECT)
  @UseGuards(AuthGuard(AuthProviders.github))
  async githubCallback(@Req() req: FastifyRequest, @Res() res: FastifyReply) {
    await this.handleCallback(req, res);
  }

  @Get('status')
  status(@Req() req: FastifyRequest) {
    return req.cookies;
  }

  private async handleCallback(
    req: FastifyRequest,
    res: FastifyReply,
  ): Promise<void> {
    const result = await this.commandBus.execute(
      new OAuthLoginCommand(req.user),
    );
    this.setCookies(result, res);
    res.status(HttpStatus.PERMANENT_REDIRECT).redirect(this.redirectUrl);
  }

  private setCookies(token: AuthResponse, res: FastifyReply): void {
    const { access_token, refresh_token } = token;
    res
      .cookie('access_token', access_token, {
        path: '/',
        httpOnly: true,
        secure: true,
      })
      .cookie('refresh_token', refresh_token, {
        path: '/',
        httpOnly: true,
        secure: true,
      });
  }
}
