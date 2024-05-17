import { Injectable } from '@nestjs/common';
import _ from 'lodash';

import { type GithubUser, type GoogleUser } from '@/oauth/types';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findIdCache(id: number) {
    return this.prisma.withAccelerate.user.findFirst({
      where: { id },
      cacheStrategy: {
        swr: 30,
        ttl: 60,
      },
    });
  }

  async findUniqueOrNew(data: GoogleUser | GithubUser) {
    data.email = data.email?.toLowerCase();
    const { email, name: display_name, provider } = data;

    const existingUser = await this.prisma.user.findUnique({
      include: {
        auth_providers: {
          select: {
            provider: true,
          },
        },
      },
      where: {
        email,
      },
    });

    if (!existingUser) {
      return this.prisma.user.create({
        data: {
          email,
          display_name,
          role: {
            connect: { id: 0 },
          },
          auth_providers: {
            create: {
              provider,
            },
          },
        },
      });
    }

    if (
      !_.includes(_.map(existingUser.auth_providers, 'provider'), data.provider)
    ) {
      await this.prisma.authProvider.create({
        data: {
          user_id: existingUser.id,
          provider,
        },
      });
    }

    return existingUser;
  }
}
