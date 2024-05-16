import {
  type CanActivate,
  type ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { QueryBus } from '@nestjs/cqrs';
import { GqlExecutionContext } from '@nestjs/graphql';

import { type Context } from '@/common/types/context.type';
import { ROLES } from '@/constants';
import { type Role } from '@/gql/prisma';
import { GetUserByIdQuery } from '@/user/queries';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly queryBus: QueryBus,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    try {
      const ctx = GqlExecutionContext.create(context).getContext<Context>();
      const user = await this.queryBus.execute(
        new GetUserByIdQuery(ctx.user.uid),
      );

      return requiredRoles.some((role) => user.role.includes(role));
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
