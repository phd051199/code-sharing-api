import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import dayjs from 'dayjs';

import { PrismaService } from '@/prisma/prisma.service';

import { type LoginInput } from './gql/login.input';
import { type RegisterInput } from './gql/register.input';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async register({ email, password }: RegisterInput) {
    const hashedPassword = await hash(password, 10);

    const user = await this.prismaService.user
      .create({
        data: {
          email,
          password: hashedPassword,
        },
      })
      .catch(() => {
        throw new BadRequestException();
      });

    return user;
  }

  async login({ email, password }: LoginInput) {
    const user = await this.prismaService.user.findUniqueOrThrow({
      where: { email },
    });

    const isPwdValid = await compare(password, user.password);

    if (!isPwdValid) {
      throw new UnauthorizedException();
    }

    await this.prismaService.user.update({
      where: { id: user.id },
      data: {
        lastLogin: dayjs().toDate(),
      },
    });

    return user;
  }
}
