import { ParseIntPipe } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Action, Prisma } from '@prisma/client';

import { Authorized, Permissions } from '@/casl/decorators';
import { can } from '@/casl/utils';
import { User } from '@/gql/user';

import { GetUserByIdQuery } from './queries';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query(() => User, { nullable: true })
  @Authorized()
  @Permissions(can(Action.read, Prisma.ModelName.User))
  getUser(@Args('id', ParseIntPipe) id: number) {
    return this.queryBus.execute(new GetUserByIdQuery(id));
  }
}
