import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { User } from '@prisma/client';

import { Authorized } from '@/casl/decorators';

import { LoginCommand, RefreshTokenCommand, RegisterCommand } from './commands';
import { AuthUser, Public } from './decorators';
import { LoginInput, RefreshTokenInput, RegisterInput } from './dtos';

@Controller('auth')
export class AuthController {
  constructor(private readonly commandBus: CommandBus) {}

  @Public()
  @Post('login')
  login(@Body() input: LoginInput) {
    return this.commandBus.execute(new LoginCommand(input));
  }

  @Public()
  @Post('register')
  register(@Body() input: RegisterInput) {
    return this.commandBus.execute(new RegisterCommand(input));
  }

  @Public()
  @Post('refreshToken')
  refreshToken(@Body() input: RefreshTokenInput) {
    return this.commandBus.execute(new RefreshTokenCommand(input));
  }

  @Get('me')
  @Authorized()
  me(@AuthUser() user: User) {
    return user;
  }
}
