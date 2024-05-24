import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { AuthService } from '@/auth/services';

import { RefreshTokenCommand } from '../impl/refresh-token.command';

@CommandHandler(RefreshTokenCommand)
export class RefreshTokenCommandHandler
  implements ICommandHandler<RefreshTokenCommand>
{
  constructor(private readonly authService: AuthService) {}

  execute(command: RefreshTokenCommand) {
    return this.authService.refreshToken(command.input);
  }
}
