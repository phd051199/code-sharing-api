import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { LoginCommand, RefreshTokenCommand, RegisterCommand } from './commands';
import { Public } from './decorators';
import { LoginInput, RefreshTokenInput, RegisterInput } from './dtos';
import { AuthResponse } from './models';

@Public()
@Resolver(() => AuthResponse)
export class AuthResolver {
  constructor(private readonly commandBus: CommandBus) {}

  @Mutation(() => AuthResponse)
  login(@Args('loginInput') input: LoginInput) {
    return this.commandBus.execute(new LoginCommand(input));
  }

  @Mutation(() => AuthResponse)
  register(@Args('registerInput') input: RegisterInput) {
    return this.commandBus.execute(new RegisterCommand(input));
  }

  @Mutation(() => AuthResponse)
  refreshToken(@Args('refreshTokenInput') input: RefreshTokenInput) {
    return this.commandBus.execute(new RefreshTokenCommand(input));
  }
}
