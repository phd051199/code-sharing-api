import { InjectQueue } from '@nestjs/bullmq';
import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import { Queue } from 'bullmq';

import { PrismaErrorCode } from '@/prisma/enums';
import { PrismaService } from '@/prisma/prisma.service';
import { TokenService } from '@/token/token.service';
import { UPDATE_LAST_LOGIN_QUEUE } from '@/user/queues';

import {
  type LoginInput,
  type RefreshTokenInput,
  type RegisterInput,
} from './dtos';

@Injectable()
export class AuthService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly prisma: PrismaService,

    @InjectQueue(UPDATE_LAST_LOGIN_QUEUE)
    private readonly updateLastLoginQueue: Queue,
  ) {}

  async register(input: RegisterInput) {
    const hashedPassword = await hash(input.password, 10);

    try {
      const user = await this.prisma.user.create({
        data: {
          email: input.email,
          password: hashedPassword,
          display_name: input.name,
          role: {
            connect: { id: 0 },
          },
        },
      });

      await this.updateLastLogin(user.id);
      return this.tokenService.getAuthPayload(user);
    } catch (error) {
      if (error.code === PrismaErrorCode.UniqueConstraint) {
        throw new ConflictException('Email already exists');
      }

      throw error;
    }
  }

  async login(input: LoginInput) {
    const { email, password } = input;
    try {
      const user = await this.prisma.user.findUniqueOrThrow({
        where: { email },
      });

      if (!(await compare(password, user.password))) {
        throw new UnauthorizedException('Invalid email or password');
      }

      await this.updateLastLogin(user.id);
      return this.tokenService.getAuthPayload(user);
    } catch {
      throw new UnauthorizedException('Invalid email or password');
    }
  }

  private async updateLastLogin(userId: number): Promise<void> {
    await this.updateLastLoginQueue.add('update-last-login', { id: userId });
  }

  async refreshToken(input: RefreshTokenInput) {
    const { refreshToken } = input;
    try {
      const { uid } = await this.tokenService.verifyRefreshToken(refreshToken);
      const user = await this.prisma.user.findUnique({
        where: { id: uid },
      });

      await this.updateLastLogin(user.id);
      return this.tokenService.getAuthPayload(user);
    } catch {
      throw new UnauthorizedException();
    }
  }
}
