import { Module } from '@nestjs/common';

import { QueryHandlers } from './queries';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  providers: [...QueryHandlers, UserResolver, UserService],
})
export class UserModule {}
