import { registerAs } from '@nestjs/config';
import { type JwtModuleOptions } from '@nestjs/jwt';

import { JWT_CONF } from '@/constants';

export const jwtConfiguration = registerAs<JwtModuleOptions>(JWT_CONF, () => ({
  secret: process.env.JWT_SECRET,
}));
