import { Action } from '@prisma/client';

import { type AppAbility, type PermissionHandler } from '@/casl/types';

export const can = (action = Action.read, tbl: string): PermissionHandler => {
  return (ability: AppAbility) => ability.can(action, tbl);
};

export const cannot = (
  action = Action.read,
  tbl: string,
): PermissionHandler => {
  return (ability: AppAbility) => ability.cannot(action, tbl);
};
