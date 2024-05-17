import { type ICommand } from '@nestjs/cqrs';
import { type FastifyReply } from 'fastify';

import { type GithubUser, type GoogleUser } from '@/oauth/types';

export class OAuthLoginCommand implements ICommand {
  constructor(
    readonly user: GoogleUser | GithubUser,
    readonly res: FastifyReply,
  ) {}
}
