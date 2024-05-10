import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { User } from '@/common/gql/user';

import { LoginCommand } from './commands/impl/login.command';
import { RegisterCommand } from './commands/impl/register.command';
import { LoginInput } from './gql/login.input';
import { RegisterInput } from './gql/register.input';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Mutation(() => User)
  login(@Args('loginInput') input: LoginInput) {
    return this.commandBus.execute(new LoginCommand(input));
  }

  @Mutation(() => User)
  register(@Args('registerInput') input: RegisterInput) {
    return this.commandBus.execute(new RegisterCommand(input));
  }
}
