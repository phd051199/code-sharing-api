import { ParseIntPipe } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { User } from '@/common/gql/user';

import { GetUserByIdQuery } from './queries/impl/get-user-by-id.query';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Query(() => User)
  getUser(@Args('id', new ParseIntPipe()) id: number) {
    return this.queryBus.execute(new GetUserByIdQuery(id));
  }
}
