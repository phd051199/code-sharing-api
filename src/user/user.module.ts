import { Module } from '@nestjs/common';

import { QueryHandlers } from './queries/handlers';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  providers: [...QueryHandlers, UserResolver, UserService],
})
export class UserModule {}
