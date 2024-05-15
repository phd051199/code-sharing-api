import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';

import { TokenModule } from '@/token/token.module';
import { UserService } from '@/user/user.service';

import { UpdateUserProcessor } from './auth.processor';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { CommandHandlers } from './commands/handlers';

@Module({
  imports: [
    TokenModule,
    BullModule.registerQueue({
      name: 'update:user',
      prefix: 'auth',
    }),
  ],
  providers: [
    ...CommandHandlers,
    AuthResolver,
    AuthService,
    UserService,
    UpdateUserProcessor,
  ],
})
export class AuthModule {}
