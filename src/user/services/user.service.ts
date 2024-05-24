import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import _ from 'lodash';

import { type GithubUser, type GoogleUser } from '@/oauth/types';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async updateLastLogin(userId: number) {
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        lastLogin: dayjs().toDate(),
      },
    });
  }

  findUnique(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findUniqueOrNew(data: GoogleUser | GithubUser) {
    data.email = data.email?.toLowerCase();
    const { email, displayName, provider } = data;

    const existingUser = await this.prisma.user.findUnique({
      include: {
        authProviders: {
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
          displayName,
          role: {
            connect: { id: 0 },
          },
          authProviders: {
            create: {
              provider,
            },
          },
        },
      });
    }

    if (
      !_.includes(_.map(existingUser.authProviders, 'provider'), data.provider)
    ) {
      await this.prisma.authProvider.create({
        data: {
          userId: existingUser.id,
          provider,
        },
      });
    }

    return existingUser;
  }
}
