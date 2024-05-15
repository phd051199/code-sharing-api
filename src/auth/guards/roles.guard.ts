import {
  type CanActivate,
  type ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';

import { type Context } from '@/common/types/context.type';
import { ROLES } from '@/constants';
import { type Role } from '@/generated/prisma';
import { UserService } from '@/user/user.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly userService: UserService,
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
      const user = await this.userService.findId(ctx.user.uid);

      return requiredRoles.some((role) => user.role.includes(role));
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
