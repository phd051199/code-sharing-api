import { ForbiddenError } from '@casl/ability';
import {
  type CanActivate,
  type ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import _ from 'lodash';

import { PrismaService } from '@/prisma/prisma.service';

import { CaslAbilityFactory } from '../casl-ability.factory';
import { PERMISSION_CHECKER } from '../decorators';
import { type AppAbility, type PermissionHandler } from '../types';

@Injectable()
export class CaslAbilitiesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private abilityFactory: CaslAbilityFactory,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();

    const user = await this.prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
      include: {
        role: {
          include: {
            permissions: true,
          },
        },
      },
    });

    const ability = this.abilityFactory.defineAbility(
      user,
      user.role.permissions,
    );

    const policyHandlers = this.reflector.getAllAndOverride<
      PermissionHandler[]
    >(PERMISSION_CHECKER, [context.getHandler(), context.getClass()]);

    if (_.isNil(policyHandlers) || !_.size(policyHandlers)) {
      return true;
    }

    try {
      const permitted = policyHandlers.some((handler: PermissionHandler) =>
        this.execPermissionHandler(handler, ability),
      );

      return permitted;
    } catch (error) {
      if (error instanceof ForbiddenError) {
        return false;
      }
      throw error;
    }
  }

  private execPermissionHandler(
    handler: PermissionHandler,
    ability: AppAbility,
  ) {
    if (typeof handler === 'function') {
      return handler(ability);
    }

    return handler.handle(ability);
  }
}
