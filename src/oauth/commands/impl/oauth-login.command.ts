import { type ICommand } from '@nestjs/cqrs';
import { type OAuthProviders } from '@prisma/client';
import { type FastifyReply } from 'fastify';

import { type GoogleUser } from '@/oauth/types/user-response.type';

export class OAuthLoginCommand implements ICommand {
  constructor(
    public readonly provider: OAuthProviders,
    public readonly user: GoogleUser,
    public readonly res: FastifyReply,
  ) {}
}
