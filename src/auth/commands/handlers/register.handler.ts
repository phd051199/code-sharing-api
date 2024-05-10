import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { AuthService } from '@/auth/auth.service';

import { RegisterCommand } from '../impl/register.command';

@CommandHandler(RegisterCommand)
export class RegisterCommandHandler
  implements ICommandHandler<RegisterCommand>
{
  constructor(private readonly authService: AuthService) {}

  execute(command: RegisterCommand) {
    return this.authService.register(command.input);
  }
}
