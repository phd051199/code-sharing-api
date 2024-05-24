import { applyDecorators, UseGuards } from '@nestjs/common';

import { JwtGuard } from '../guards';

export const Authenticated = () => applyDecorators(UseGuards(JwtGuard));
