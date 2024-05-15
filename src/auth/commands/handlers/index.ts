import { LoginCommandHandler } from './login.handler';
import { RefreshTokenCommandHandler } from './refresh-token.handler';
import { RegisterCommandHandler } from './register.handler';

export const CommandHandlers = [
  LoginCommandHandler,
  RegisterCommandHandler,
  RefreshTokenCommandHandler,
];
