import { Injectable } from '@nestjs/common';

import { BaseCrudService } from '@/common/base/base.service';
import type {
  CreateManyUserArgs,
  CreateOneUserArgs,
  DeleteManyUserArgs,
  DeleteOneUserArgs,
  FindFirstUserArgs,
  FindManyUserArgs,
  FindUniqueUserArgs,
  UpdateManyUserArgs,
  UpdateOneUserArgs,
  User,
  UserAggregateArgs,
  UserGroupByArgs,
} from '@/common/gql/user';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class UserService extends BaseCrudService<
  User,
  FindFirstUserArgs,
  FindUniqueUserArgs,
  FindManyUserArgs,
  UserGroupByArgs,
  UserAggregateArgs,
  CreateOneUserArgs,
  CreateManyUserArgs,
  UpdateOneUserArgs,
  UpdateManyUserArgs,
  DeleteOneUserArgs,
  DeleteManyUserArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
