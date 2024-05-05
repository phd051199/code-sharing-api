import { registerAs } from '@nestjs/config';

export interface AppConfiguration {
  readonly host: string;
  readonly port: string;
}

export const appConfiguration = registerAs<AppConfiguration>('app', () => ({
  host: process.env.SERVICE_HOST || '127.0.0.1',
  port: process.env.SERVICE_PORT || '3000',
}));
