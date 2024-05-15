import { InjectQueue } from '@nestjs/bullmq';
import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import { Queue } from 'bullmq';

import { PrismaErrorCode } from '@/common/enums';
import { TokenService } from '@/token/token.service';
import { UserService } from '@/user/user.service';

import { type LoginInput } from './dtos/login.input';
import { type RegisterInput } from './dtos/register.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,

    @InjectQueue('update:user')
    private readonly updateUserQueue: Queue,
  ) {}

  async register(input: RegisterInput) {
    const { email, password } = input;

    const hashedPassword = await hash(password, 10);

    const user = await this.userService
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

    await this.updateUserQueue.add('update-last-login', {
      id: user.id,
    });

    return this.tokenService.getUserLoginPayload(user);
  }
  ß;

  async login(input: LoginInput) {
    const { email, password } = input;

    const user = await this.userService.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    const isPwdValid = await compare(password, user.password);

    if (!isPwdValid) {
      throw new UnauthorizedException();
    }

    await this.updateUserQueue.add('update-last-login', {
      id: user.id,
    });

    return this.tokenService.getUserLoginPayload(user);
  }
}
