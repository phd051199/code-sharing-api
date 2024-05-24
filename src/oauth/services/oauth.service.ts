import { Injectable } from '@nestjs/common';
import { type AuthProviders } from '@prisma/client';

import { type AuthResponse } from '@/auth/models';
import { TokenService } from '@/token/token.service';
import { UserService } from '@/user/services';

@Injectable()
export class OAuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async login(
    provider: AuthProviders,
    email: string,
    displayName: string,
  ): Promise<AuthResponse> {
    const user = await this.usersService.findUniqueOrNew({
      provider,
      email,
      displayName,
    });

    this.usersService.updateLastLogin(user.id);

    return this.tokenService.generate(user);
  }
}
