import { Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { Authorized, Permissions } from '@/casl/decorators';
import { can } from '@/casl/utils';
import { Action } from '@/gql/prisma';
import { Script } from '@/gql/script';

@Resolver(() => Script)
export class ScriptResolver {
  constructor() {}

  @Query(() => [Script])
  @Authorized()
  @Permissions(can(Action.read, Prisma.ModelName.Script))
  async list() {
    return [];
  }
}
