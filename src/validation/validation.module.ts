import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

import { exceptionFactory } from './validation.factory';

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useFactory() {
        return new ValidationPipe({
          transform: true,
          exceptionFactory,
        });
      },
    },
  ],
})
export class ValidationModule {}
