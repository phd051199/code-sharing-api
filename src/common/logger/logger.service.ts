import { ConsoleLogger, Injectable } from '@nestjs/common';
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const format = winston.format.combine(
  winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss Z',
  }),
  winston.format.printf((info) => {
    return `[${info.timestamp}] ${info.message}`;
  }),
);

@Injectable()
export class LoggerService extends ConsoleLogger {
  private readonly logger: winston.Logger;

  constructor() {
    super();

    this.logger = winston.createLogger({
      transports: [
        new DailyRotateFile({
          level: 'info',
          filename: `logs/info/%DATE%.log`,
          format,
        }),
        new DailyRotateFile({
          level: 'error',
          filename: `logs/error/%DATE%.log`,
          format,
        }),
      ],
      exitOnError: false,
    });
  }

  info(message: string): void {
    this.logger.info(message);
  }

  error(message: string, trace?: string, context?: string): void {
    this.logger.error(
      `${context || ''} ${message} ${trace ? `-> (${trace})` : ''}`,
    );
  }
}
