import { type ICommand } from '@nestjs/cqrs';

import { type RefreshTokenInput } from '@/auth/dtos';

export class RefreshTokenCommand implements ICommand {
  constructor(readonly input: RefreshTokenInput) {}
}
