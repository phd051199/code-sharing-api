import { applyDecorators, UseGuards } from '@nestjs/common';

import { GqlJwtGuard } from '@/auth/guards';

import { CaslAbilitiesGuard } from '../guards';

export const Authorized = () => {
  return applyDecorators(UseGuards(GqlJwtGuard, CaslAbilitiesGuard));
};
