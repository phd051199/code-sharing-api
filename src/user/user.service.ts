import { Injectable } from '@nestjs/common';

import { BaseCrudService } from '@/common/base/base.service';
import {
  type CreateManyUserArgs,
  type CreateOneUserArgs,
  type DeleteManyUserArgs,
  type DeleteOneUserArgs,
  type FindFirstUserArgs,
  type FindManyUserArgs,
  type FindUniqueUserArgs,
  type UpdateManyUserArgs,
  type UpdateOneUserArgs,
  type User,
  type UserAggregateArgs,
  type UserGroupByArgs,
} from '@/gql/user';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class UserService extends BaseCrudService<
  User,
  FindFirstUserArgs,
  FindUniqueUserArgs,
  FindManyUserArgs,
  UserGroupByArgs,
  UserAggregateArgs,
  CreateOneUserArgs,
  CreateManyUserArgs,
  UpdateOneUserArgs,
  UpdateManyUserArgs,
  DeleteOneUserArgs,
  DeleteManyUserArgs
> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService);
  }

  findByEmail(email: string): Promise<User | null> {
    return this.prismaService.user.findUnique({ where: { email } });
  }

  findIdCache(id: number): Promise<User | null> {
    return this.prisma.withAccelerate.user.findUnique({
      where: { id },
      cacheStrategy: {
        swr: 30,
        ttl: 60,
      },
    });
  }

  async findOrCreate({ data }: CreateOneUserArgs): Promise<User> {
    const existingUser = await this.findByEmail(data.email);

    if (existingUser) {
      return existingUser;
    }

    return this.prismaService.user.create({ data });
  }
}
