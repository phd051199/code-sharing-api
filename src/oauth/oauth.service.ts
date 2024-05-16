import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { type OAuthProviders } from '@prisma/client';
import { Queue } from 'bullmq';

import { type AuthResponse } from '@/auth/models';
import { TokenService } from '@/token/token.service';
import { update_last_login_queue } from '@/user/queues';
import { UserService } from '@/user/user.service';

@Injectable()
export class OAuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly tokenService: TokenService,

    @InjectQueue(update_last_login_queue)
    private readonly updateLastLoginQueue: Queue,
  ) {}

  public async login(
    provider: OAuthProviders,
    email: string,
    name: string,
  ): Promise<AuthResponse> {
    const user = await this.usersService.findOrCreate({
      data: {
        email,
        profile: { create: { name } },
        oauthProviders: { create: [{ provider }] },
      },
    });

    await this.updateLastLoginQueue.add('update-last-login', {
      id: user.id,
    });

    return this.tokenService.generateUserToken(user);
  }
}
