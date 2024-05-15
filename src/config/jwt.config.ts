import { registerAs } from '@nestjs/config';
import { type JwtModuleOptions } from '@nestjs/jwt';

import { JWT_CFG } from '@/constants';

export const jwtConfiguration = registerAs<JwtModuleOptions>(JWT_CFG, () => ({
  secret: process.env.JWT_SECRET,
}));
