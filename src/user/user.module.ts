import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { JwtStrategy } from '@/auth/strategies';
import { CaslAbilityFactory } from '@/casl/casl-ability.factory';

import { QueryHandlers } from './queries';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [
    ...QueryHandlers,
    UserResolver,
    UserService,
    JwtStrategy,
    CaslAbilityFactory,
  ],
})
export class UserModule {}
