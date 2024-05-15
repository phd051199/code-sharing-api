import { Injectable } from '@nestjs/common';
import { JwtService, TokenExpiredError } from '@nestjs/jwt';
import { type User } from '@prisma/client';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import { type UserLogin } from '@/auth/models/user-login.model';
import { type JUser } from '@/common/types/context.type';
import { RedisService } from '@/redis/redis.service';

import { type TokenStatus } from './enums';

export type GetUserFromTokenResponse = {
  user: JUser;
  tokenStatus: TokenStatus;
};

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly redisService: RedisService,
  ) {}

  async generateUserToken(user: User) {
    const secondSinceEpoch = dayjs().unix();

    const refreshToken = uuidv4();
    const accessToken = this.jwtService.sign({
      uid: user.id,
      email: user.email,
      role: user.role,
      iat: secondSinceEpoch,
      exp: secondSinceEpoch + 60 * 60 * 6,
    });

    await this.redisService.set(
      'refreshToken',
      refreshToken,
      user.id,
      60 * 60 * 24 * 1,
    );

    return { refreshToken, accessToken };
  }

  async getUserLoginPayload(user: User): Promise<UserLogin> {
    const token = await this.generateUserToken(user);

    return { ...token, user };
  }

  verifyToken(token: string | null): GetUserFromTokenResponse {
    if (!token) {
      return { user: null, tokenStatus: 'invalid' };
    }
    try {
      const user = this.jwtService.verify(token);
      return { user, tokenStatus: 'valid' };
    } catch (err) {
      let tokenStatus: TokenStatus = 'invalid';
      if (err instanceof TokenExpiredError) {
        tokenStatus = 'expired';
      }
      return { user: null, tokenStatus };
    }
  }
}
