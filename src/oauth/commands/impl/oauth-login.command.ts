import { type ICommand } from '@nestjs/cqrs';

import { type GithubUser, type GoogleUser } from '@/oauth/types';

export class OAuthLoginCommand implements ICommand {
  constructor(readonly user: GoogleUser | GithubUser) {}
}
