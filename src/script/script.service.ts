import { Injectable } from '@nestjs/common';

import { BaseCrudService } from '@/common/base/base.service';
import { type Script } from '@/generated/script';
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
  type UserScriptAggregateArgs,
  type UserScriptGroupByArgs,
} from '@/generated/user-script';

@Injectable()
export class ScriptService extends BaseCrudService<
  Script,
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
