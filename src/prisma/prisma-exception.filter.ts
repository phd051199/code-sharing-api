import {
  Catch,
  ConflictException,
  type ExceptionFilter,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { PrismaErrorCode } from './enums';

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError) {
    switch (exception.code) {
      case PrismaErrorCode.RecordNotFound:
      case PrismaErrorCode.DependentRecordsNotFound:
        throw new NotFoundException(exception.message);

      case PrismaErrorCode.UniqueConstraint:
        throw new ConflictException(exception.message);

      default:
        throw new InternalServerErrorException(exception.message);
    }
  }
}
