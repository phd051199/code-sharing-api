import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { Roles } from '@/auth/decorators';
import { GqlJwtGuard } from '@/auth/guards';
import { Role } from '@/generated/prisma';
import { User } from '@/generated/user';

import { GetUserByIdQuery } from './queries';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Query(() => User, { nullable: true })
  @UseGuards(GqlJwtGuard)
  @Roles(Role.admin)
  getUser(@Args('id', ParseIntPipe) id: number) {
    return this.queryBus.execute(new GetUserByIdQuery(id));
  }
}
