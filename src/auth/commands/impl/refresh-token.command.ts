import { type ICommand } from '@nestjs/cqrs';

import { type RefreshTokenInput } from '@/auth/dtos';

export class RefreshTokenCommand implements ICommand {
  constructor(public readonly input: RefreshTokenInput) {}
}
