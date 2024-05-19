import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { TokenModule } from '@/token/token.module';
import { UserService } from '@/user/user.service';

import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { CommandHandlers } from './commands';
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
