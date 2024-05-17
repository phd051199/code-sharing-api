import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { type AuthProviders } from '@prisma/client';
import { Queue } from 'bullmq';

import { type AuthResponse } from '@/auth/models';
import { TokenService } from '@/token/token.service';
import { UPDATE_LAST_LOGIN_QUEUE } from '@/user/queues';
import { UserService } from '@/user/user.service';

@Injectable()
export class OAuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly tokenService: TokenService,

    @InjectQueue(UPDATE_LAST_LOGIN_QUEUE)
    private readonly updateLastLoginQueue: Queue,
  ) {}

  async login(
    provider: AuthProviders,
    email: string,
    name: string,
  ): Promise<AuthResponse> {
    const user = await this.usersService.findUniqueOrNew({
      provider,
      email,
      name,
    });

    await this.updateLastLoginQueue.add('update-last-login', {
      id: user.id,
    });

    return this.tokenService.generateUserToken(user);
  }
}
