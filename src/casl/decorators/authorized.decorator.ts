import { applyDecorators, UseGuards } from '@nestjs/common';

import { JwtGuard } from '@/auth/guards';

import { CaslAbilitiesGuard } from '../guards';

export const Authorized = () =>
  applyDecorators(UseGuards(JwtGuard, CaslAbilitiesGuard));
