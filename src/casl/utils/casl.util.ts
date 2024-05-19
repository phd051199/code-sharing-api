import { Action, type Prisma } from '@prisma/client';

import { type AppAbility, type PermissionHandler } from '@/casl/types';

export const can = (
  action = Action.read,
  tbl: Prisma.ModelName,
): PermissionHandler => {
  return (ability: AppAbility) => ability.can(action, tbl);
};

export const cannot = (
  action = Action.read,
  tbl: Prisma.ModelName,
): PermissionHandler => {
  return (ability: AppAbility) => ability.cannot(action, tbl);
};
