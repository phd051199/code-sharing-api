import { AbilityBuilder, type ExtractSubjectType } from '@casl/ability';
import { createPrismaAbility } from '@casl/prisma';
import { Injectable } from '@nestjs/common';
import { type Permission, type Prisma, type User } from '@prisma/client';
import _ from 'lodash';
import Mustache from 'mustache';

import { type AppAbility, type Subjects } from './types';

@Injectable()
export class CaslAbilityFactory {
  defineAbility(user: User, permissions: Permission[]) {
    const { can, cannot, build } = new AbilityBuilder<AppAbility>(
      createPrismaAbility,
    );

    _.forEach(permissions, (permission) => {
      const { action, subject } = permission;
      const conditions = this.parseCondition(permission, user);

      if (permission.inverted) {
        cannot(action, <Prisma.ModelName>subject, conditions).because(
          permission.reason,
        );
      } else {
        can(action, <Prisma.ModelName>subject, conditions).because(
          permission.reason,
        );
      }
    });

    return build({
      detectSubjectType: (subject: {
        constructor: ExtractSubjectType<Subjects>;
      }) => subject.constructor,
    });
  }

  private parseCondition(permission: Permission, currentUser: User) {
    if (!_.size(<string>permission.conditions)) {
      return undefined;
    }
    const email = Mustache.render(
      _.get(permission.conditions, 'email'),
      currentUser,
    );
    return { email };
  }
}
