import { type ICommand } from '@nestjs/cqrs';

import { type RegisterInput } from '@/auth/gql/register.input';

export class RegisterCommand implements ICommand {
  constructor(public readonly input: RegisterInput) {}
}
