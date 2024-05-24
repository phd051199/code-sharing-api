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
        throw new NotFoundException();

      case PrismaErrorCode.UniqueConstraint:
        throw new ConflictException();

      default:
        throw new InternalServerErrorException();
    }
  }
}
