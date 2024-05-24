import { Module } from '@nestjs/common';

import { QueryHandlers } from './queries';
import { UserService } from './services';
import { UserResolver } from './user.resolver';

@Module({
  providers: [...QueryHandlers, UserResolver, UserService],
})
export class UserModule {}
