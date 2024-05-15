import { UserInputError } from '@nestjs/apollo';
import {
  HttpStatus,
  Injectable,
  type ValidationError,
  ValidationPipe as ogValidationPipe,
} from '@nestjs/common';
import { map } from 'lodash';

@Injectable()
export class ValidationPipe extends ogValidationPipe {
  constructor() {
    super({
      transform: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const details = map(errors, 'constraints');

        return new UserInputError('VALIDATION_ERROR', {
          extensions: {
            originalError: {
              details,
              statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
            },
          },
        });
      },
    });
  }
}
