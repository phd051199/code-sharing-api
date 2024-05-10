import { type ICommand } from '@nestjs/cqrs';

import { type LoginInput } from '@/auth/gql/login.input';

export class LoginCommand implements ICommand {
  constructor(public readonly input: LoginInput) {}
}
