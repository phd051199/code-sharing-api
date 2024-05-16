import { Injectable } from '@nestjs/common';

import { BaseCrudService } from '@/common/base/base.service';
import {
  type CreateManyUserArgs,
  type CreateOneUserArgs,
  type DeleteManyUserArgs,
  type DeleteOneUserArgs,
  type FindFirstUserArgs,
  type FindManyUserArgs,
  type FindUniqueUserArgs,
  type UpdateManyUserArgs,
  type UpdateOneUserArgs,
  type User,
  type UserAggregateArgs,
  type UserGroupByArgs,
} from '@/generated/user';

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
> {}
