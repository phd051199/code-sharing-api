import { Injectable } from '@nestjs/common';
import { JwtService, TokenExpiredError } from '@nestjs/jwt';
import { Role, type User } from '@prisma/client';
import { trimStart } from 'lodash';

import { type UserLogin } from '@/auth/models/user-login.model';
import { type JWTUser } from '@/common/types/context.type';

import { type TokenStatus } from './enums';

export type GetUserFromTokenResponse = {
  user: JWTUser;
  tokenStatus: TokenStatus;
};

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  generateUserToken(user: User): string {
    const token = this.jwtService.sign({
      id: user.id,
      email: user.email,
      role: Role.user,
    });
    return token;
  }

  getUserLoginPayload(user: User): UserLogin {
    const token = this.generateUserToken(user);

    return { token, user };
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

  getUserConnection(authHeader: string | undefined) {
    try {
      if (!authHeader) return null;

      const token = this.getBearerToken(authHeader);
      return token ?? null;
    } catch {
      return null;
    }
  }

  getBearerToken(authHeader: string | undefined) {
    return trimStart(authHeader, 'Bearer ');
  }

  getTokenFromHeader(authHeader: string | undefined): GetUserFromTokenResponse {
    const token = this.getUserConnection(authHeader);

    return this.verifyToken(token);
  }
}
