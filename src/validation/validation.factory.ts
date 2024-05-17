import { UserInputError } from '@nestjs/apollo';
import { HttpStatus } from '@nestjs/common';
import { type ValidationError } from 'class-validator';
import _ from 'lodash';

export const exceptionFactory = (errors: ValidationError[]) => {
  const details = _.map(errors, 'constraints');

  return new UserInputError('VALIDATION_ERROR', {
    extensions: {
      originalError: {
        details,
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      },
    },
  });
};
