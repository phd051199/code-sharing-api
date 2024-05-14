import { type ICommand } from '@nestjs/cqrs';

import { type RegisterInput } from '@/auth/dtos/register.input';

export class RegisterCommand implements ICommand {
  constructor(public readonly input: RegisterInput) {}
}
