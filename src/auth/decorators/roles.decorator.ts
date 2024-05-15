import { SetMetadata } from '@nestjs/common';
import { type Role } from '@prisma/client';

import { ROLES } from '@/constants';

export const Roles = (...roles: Array<keyof typeof Role>) =>
  SetMetadata(ROLES, roles);
