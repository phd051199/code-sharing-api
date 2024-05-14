import {
  type ArgumentsHost,
  Catch,
  type ExceptionFilter,
} from '@nestjs/common';
import { GqlArgumentsHost } from '@nestjs/graphql';

import { DomainError, type ErrorCode } from '../errors';

@Catch(DomainError)
export class DomainErrorFilter implements ExceptionFilter {
  catch(
    exception: DomainError<ErrorCode, Record<string, unknown> | undefined>,
    host: ArgumentsHost,
  ) {
    GqlArgumentsHost.create(host);
    return exception;
  }
}
