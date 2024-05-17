import { applyDecorators, UseGuards } from '@nestjs/common';

import { GqlJwtGuard } from '../guards';

export const Authenticated = () => {
  return applyDecorators(UseGuards(GqlJwtGuard));
};
