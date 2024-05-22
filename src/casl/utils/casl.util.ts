import { type Action, type Prisma } from '@prisma/client';

import { type AppAbility, type PermissionHandler } from '@/casl/types';

export const can = (
  action: Action,
  tbl: Prisma.ModelName,
): PermissionHandler => {
  return (ability: AppAbility) => ability.can(action, tbl);
};

export const cannot = (
  action: Action,
  tbl: Prisma.ModelName,
): PermissionHandler => {
  return (ability: AppAbility) => ability.cannot(action, tbl);
};
