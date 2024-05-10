import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { AuthService } from '@/auth/auth.service';

import { LoginCommand } from '../impl/login.command';

@CommandHandler(LoginCommand)
export class LoginCommandHandler implements ICommandHandler<LoginCommand> {
  constructor(private readonly authService: AuthService) {}

  execute(command: LoginCommand) {
    return this.authService.login(command.input);
  }
}
