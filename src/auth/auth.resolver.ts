import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { LoginCommand } from './commands/impl/login.command';
import { RegisterCommand } from './commands/impl/register.command';
import { LoginInput } from './dtos/login.input';
import { RegisterInput } from './dtos/register.input';
import { UserLogin } from './models/user-login.model';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Mutation(() => UserLogin)
  login(@Args('loginInput') input: LoginInput) {
    return this.commandBus.execute(new LoginCommand(input));
  }

  @Mutation(() => UserLogin)
  register(@Args('registerInput') input: RegisterInput) {
    return this.commandBus.execute(new RegisterCommand(input));
  }
}
