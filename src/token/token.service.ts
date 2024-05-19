import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { type User } from '@prisma/client';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import { type AuthResponse } from '@/auth/models';
import { RedisService } from '@/redis/redis.service';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly redisService: RedisService,
  ) {}

  generate(user: User): AuthResponse {
    const now = dayjs();
    const secondSinceEpoch = now.unix();

    const refreshToken = uuidv4();
    const accessToken = this.jwtService.sign({
      uid: user.id,
      email: user.email,
      iat: secondSinceEpoch,
      exp: now.add(1, 'day').unix(),
    });

    const refreshTokenExpiry = now.add(30, 'days').unix() - secondSinceEpoch;

    this.redisService.set(
      'refreshToken',
      refreshToken,
      user.id,
      refreshTokenExpiry,
    );

    return { refresh_token: refreshToken, access_token: accessToken };
  }

  async verifyRefreshToken(refreshToken: string): Promise<number> {
    const uid = await this.redisService.getInt('refreshToken', refreshToken);

    if (!uid) {
      throw new UnauthorizedException();
    }

    return uid;
  }
}
