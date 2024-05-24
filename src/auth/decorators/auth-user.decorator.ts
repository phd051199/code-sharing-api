import { createParamDecorator, type ExecutionContext } from '@nestjs/common';
import _ from 'lodash';

import { extractContext } from '@/common/utils';

export const AuthUser = createParamDecorator(
  (args: string, context: ExecutionContext) => {
    const { req } = extractContext(context);
    const user = _.pick(req.user, ['id', 'email', 'user_name', 'display_name']);

    return args ? _.get(user, args) : user;
  },
);
