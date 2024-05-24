import {
  type CallHandler,
  type ExecutionContext,
  Injectable,
  type NestInterceptor,
} from '@nestjs/common';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { extractContext } from '../utils';
import { LoggerService } from './logger.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly loggerService: LoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler) {
    const now = Date.now();
    const { req } = extractContext(context);

    const { method, url, body } = req;

    return next.handle().pipe(
      tap((data) => {
        const responseTime = Date.now() - now + 'ms';
        const log = {
          request: {
            body,
          },
          response: {
            body: data,
          },
          responseTime,
        };
        this.loggerService.info(`${method} ${url} - ${JSON.stringify(log)}`);
      }),

      catchError((error) => {
        const log = {
          request: {
            body,
          },
          response: {
            body: error.response,
          },
        };
        this.loggerService.info(`${method} ${url} - ${JSON.stringify(log)}`);
        return throwError(() => error);
      }),
    );
  }
}
