import { InjectQueue } from '@nestjs/bullmq';
import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import { Queue } from 'bullmq';

import { PrismaErrorCode } from '@/prisma/enums';
import { TokenService } from '@/token/token.service';
import { UserService } from '@/user/user.service';

import {
  type LoginInput,
  type RefreshTokenInput,
  type RegisterInput,
} from './dtos';
import { update_last_login_queue } from './queues';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,

    @InjectQueue(update_last_login_queue)
    private readonly updateLastLoginQueue: Queue,
  ) {}

  async register(input: RegisterInput) {
    const hashedPassword = await hash(input.password, 10);

    try {
      const user = await this.userService.create({
        data: {
          ...input,
          password: hashedPassword,
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
      const user = await this.userService.findUniqueOrThrow({
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
      const user = await this.userService.findId(uid);

      await this.updateLastLogin(user.id);
      return this.tokenService.getAuthPayload(user);
    } catch {
      throw new UnauthorizedException();
    }
  }
}
