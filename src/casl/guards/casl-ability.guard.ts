import { ForbiddenError } from '@casl/ability';
import {
  type CanActivate,
  type ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import _ from 'lodash';

import { extractContext } from '@/common/utils';

import { CaslAbilityFactory } from '../casl-ability.factory';
import { PERMISSION } from '../decorators';
import { type AppAbility, type PermissionHandler } from '../types';

@Injectable()
export class CaslAbilitiesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private abilityFactory: CaslAbilityFactory,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const policyHandlers = this.reflector.getAllAndOverride<
      PermissionHandler[]
    >(PERMISSION, [context.getHandler(), context.getClass()]);

    if (_.isNil(policyHandlers) || !_.size(policyHandlers)) {
      return true;
    }

    const {
      req: { user },
    } = extractContext(context);

    const ability = this.abilityFactory.defineAbility(
      user,
      user.role.permissions,
    );

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
    if (handler instanceof Function) {
      return handler(ability);
    }

    return handler.handle(ability);
  }
}
