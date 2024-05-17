import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService, TokenExpiredError } from '@nestjs/jwt';
import { type User } from '@prisma/client';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import { type AuthResponse } from '@/auth/models';
import { RedisService } from '@/redis/redis.service';

import { TokenStatus } from './enums';
import { type TokenPayload } from './types';

export type TokenResponse = {
  payload: TokenPayload;
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
      role: user.role_id,
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

  async getAuthPayload(user: User): Promise<AuthResponse> {
    const token = await this.generateUserToken(user);

    return { ...token, user };
  }

  verifyAccessToken(token: string): TokenResponse {
    try {
      const payload = this.jwtService.verify(token);

      return { payload, tokenStatus: TokenStatus.VALID };
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        return { payload: null, tokenStatus: TokenStatus.EXPIRED };
      }

      return { payload: null, tokenStatus: TokenStatus.INVALID };
    }
  }

  async verifyRefreshToken(refreshToken: string) {
    const uid = await this.redisService.getInt('refreshToken', refreshToken);

    if (!uid) {
      throw new UnauthorizedException();
    }

    return { uid, tokenStatus: TokenStatus.VALID };
  }
}
