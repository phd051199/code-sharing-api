import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { AuthGuard } from '@nestjs/passport';
import { AuthProviders } from '@prisma/client';
import { FastifyReply, FastifyRequest } from 'fastify';

import { Public } from '@/auth/decorators';

import { OAuthLoginCommand } from './commands';

@Public()
@Controller('oauth')
export class OAuthController {
  constructor(private readonly commandBus: CommandBus) {}

  @Get('google')
  @UseGuards(AuthGuard(AuthProviders.google))
  google() {}

  @Get('google/callback')
  @UseGuards(AuthGuard(AuthProviders.google))
  googleCallback(@Req() req: FastifyRequest, @Res() res: FastifyReply) {
    return this.commandBus.execute(new OAuthLoginCommand(req.user, res));
  }

  @Get('github')
  @UseGuards(AuthGuard(AuthProviders.github))
  github() {}

  @Get('github/callback')
  @UseGuards(AuthGuard(AuthProviders.github))
  githubCallback(@Req() req: FastifyRequest, @Res() res: FastifyReply) {
    return this.commandBus.execute(new OAuthLoginCommand(req.user, res));
  }

  @Get('status')
  status(@Req() req: FastifyRequest) {
    return req.cookies;
  }
}
