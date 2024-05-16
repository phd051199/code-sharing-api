import { Injectable } from '@nestjs/common';

import { BaseCrudService } from '@/common/base/base.service';
import {
  type CreateManyUserScriptArgs,
  type CreateOneUserScriptArgs,
  type DeleteManyUserScriptArgs,
  type DeleteOneUserScriptArgs,
  type FindFirstUserScriptArgs,
  type FindManyUserScriptArgs,
  type FindUniqueUserScriptArgs,
  type UpdateManyUserScriptArgs,
  type UpdateOneUserScriptArgs,
  type UserScript,
  type UserScriptAggregateArgs,
  type UserScriptGroupByArgs,
} from '@/generated/user-script';

@Injectable()
export class UserScriptService extends BaseCrudService<
  UserScript,
  FindFirstUserScriptArgs,
  FindUniqueUserScriptArgs,
  FindManyUserScriptArgs,
  UserScriptGroupByArgs,
  UserScriptAggregateArgs,
  CreateOneUserScriptArgs,
  CreateManyUserScriptArgs,
  UpdateOneUserScriptArgs,
  UpdateManyUserScriptArgs,
  DeleteOneUserScriptArgs,
  DeleteManyUserScriptArgs
> {}
