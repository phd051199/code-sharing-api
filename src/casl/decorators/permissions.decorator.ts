import { SetMetadata } from '@nestjs/common';

import { type PermissionHandler } from '../types';

export const PERMISSION = 'PERMISSION';

export const CheckPermissions = (...handlers: PermissionHandler[]) =>
  SetMetadata(PERMISSION, handlers);
