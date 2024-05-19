import { createParamDecorator, type ExecutionContext } from '@nestjs/common';
import _ from 'lodash';

import { extractContext } from '@/common/utils';

export const AuthUser = createParamDecorator(
  (_data, context: ExecutionContext) => {
    const { req } = extractContext(context);

    return _.pick(req.user, ['id', 'email', 'user_name', 'display_name']);
  },
);
