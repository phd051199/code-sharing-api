import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { FindUniqueUserOrThrowArgs, User } from '@/common/gql/user';

import { GetUserQuery } from './queries/impl/get-user.query';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Query(() => User)
  getUser(@Args() args: FindUniqueUserOrThrowArgs) {
    return this.queryBus.execute(new GetUserQuery(args));
  }
}
