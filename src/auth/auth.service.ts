import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import dayjs from 'dayjs';

import { PrismaErrorCode } from '@/common/enums';
import { PrismaService } from '@/prisma/prisma.service';

import { type LoginInput } from './dtos/login.input';
import { type RegisterInput } from './dtos/register.input';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async register(input: RegisterInput) {
    const { email, password } = input;

    const hashedPassword = await hash(password, 10);

    const user = await this.prismaService.user
      .create({
        data: {
          email,
          password: hashedPassword,
        },
      })
      .catch((err) => {
        if (err.code === PrismaErrorCode.UniqueConstraint) {
          throw new ConflictException('Email already exists');
        }
        throw err;
      });

    return user;
  }

  async login(input: LoginInput) {
    const { email, password } = input;

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
