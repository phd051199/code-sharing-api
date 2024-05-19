import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { compare, hash } from 'bcrypt';

import { PrismaErrorCode } from '@/prisma/enums';
import { PrismaService } from '@/prisma/prisma.service';
import { TokenService } from '@/token/token.service';
import { UserService } from '@/user/user.service';

import {
  type LoginInput,
  type RefreshTokenInput,
  type RegisterInput,
} from './dtos';

@Injectable()
export class AuthService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly userService: UserService,
    private readonly prisma: PrismaService,
  ) {}

  async register(input: RegisterInput) {
    const hashedPassword = await hash(input.password, 10);

    try {
      const user = await this.prisma.user.create({
        data: {
          email: input.email,
          password: hashedPassword,
          display_name: input.displayName,
          role: {
            connect: { id: 0 },
          },
        },
      });

      this.userService.updateLastLogin(user.id);

      return this.tokenService.generate(user);
    } catch (error) {
      if (error.code === PrismaErrorCode.UniqueConstraint) {
        throw new ConflictException('Email already exists');
      }

      throw error;
    }
  }

  async login(input: LoginInput) {
    const { email, password } = input;

    const user = await this.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    this.userService.updateLastLogin(user.id);

    return this.tokenService.generate(user);
  }

  private async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return null;
    }

    const isMatch = await compare(password, user.password);

    if (!isMatch) {
      return null;
    }

    return user;
  }

  async refreshToken(input: RefreshTokenInput) {
    const { refreshToken } = input;
    try {
      const uid = await this.tokenService.verifyRefreshToken(refreshToken);
      const user = await this.prisma.user.findUnique({
        where: { id: uid },
      });

      this.userService.updateLastLogin(user.id);

      return this.tokenService.generate(user);
    } catch {
      throw new UnauthorizedException();
    }
  }
}
