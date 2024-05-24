import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { TokenModule } from '@/token/token.module';
import { UserService } from '@/user/services';

import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { CommandHandlers } from './commands';
import { AuthService } from './services';
import { JwtStrategy } from './strategies';

@Module({
  imports: [TokenModule, PassportModule.register({ session: false })],
  providers: [
    ...CommandHandlers,
    AuthResolver,
    AuthService,
    UserService,
    JwtStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
