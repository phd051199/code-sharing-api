import { SetMetadata } from '@nestjs/common';

import { type PermissionHandler } from '../types';

export const PERMISSION_CHECKER = 'permission_checker';

export const Permissions = (...handlers: PermissionHandler[]) =>
  SetMetadata(PERMISSION_CHECKER, handlers);
