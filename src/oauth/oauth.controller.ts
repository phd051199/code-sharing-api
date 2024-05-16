import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { OAuthProviders } from '@prisma/client';
import { FastifyReply, FastifyRequest } from 'fastify';

import { Public } from '@/auth/decorators';

import { OAuthLoginCommand } from './commands';
import { GoogleOAuthGuard } from './guards/google-oauth.guard';

@Controller('oauth')
export class OAuthController {
  constructor(private readonly commandBus: CommandBus) {}

  @Public()
  @UseGuards(GoogleOAuthGuard)
  @Get('google')
  google() {}

  @Public()
  @UseGuards(GoogleOAuthGuard)
  @Get('google/callback')
  async googleCallback(
    @Req() req: FastifyRequest,
    @Res() res: FastifyReply,
  ): Promise<void> {
    await this.commandBus.execute(
      new OAuthLoginCommand(OAuthProviders.google, req.user, res),
    );
  }

  @Public()
  @Get('status')
  status(@Req() req: FastifyRequest) {
    return {
      status: req.cookies.accessToken ? 'authenticated' : 'unauthenticated',
    };
  }
}
