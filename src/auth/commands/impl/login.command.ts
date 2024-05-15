import { type ICommand } from '@nestjs/cqrs';

import { type LoginInput } from '@/auth/dtos';

export class LoginCommand implements ICommand {
  constructor(public readonly input: LoginInput) {}
}
