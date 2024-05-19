import { type PureAbility } from '@casl/ability';
import { type Action, type Prisma } from '@prisma/client';

export type Subjects = 'all' | Prisma.ModelName;

export type Abilities = [Action, Subjects];

export type AppAbility = PureAbility<Abilities>;

type PermissionHandlerCallback = (ability: AppAbility) => boolean;

export type PermissionHandler =
  | { handle(ability: AppAbility): boolean }
  | PermissionHandlerCallback;
