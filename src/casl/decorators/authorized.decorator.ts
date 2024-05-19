import { applyDecorators, UseGuards } from '@nestjs/common';

import { JwtGuard } from '@/auth/guards';

import { CaslAbilitiesGuard } from '../guards';

export const Authorized = () => {
  return applyDecorators(UseGuards(JwtGuard, CaslAbilitiesGuard));
};
