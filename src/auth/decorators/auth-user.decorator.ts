import { createParamDecorator, type ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { type AuthContext } from '../types/auth-context.type';

export const AuthUser = createParamDecorator((_, context: ExecutionContext) => {
  const { user } =
    GqlExecutionContext.create(context).getContext<AuthContext>();
  return user;
});
