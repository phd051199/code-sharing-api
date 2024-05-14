import { registerAs } from '@nestjs/config';

import { APP_CONF } from '../constants';

export interface IAppConfiguration {
  readonly host?: string;
  readonly port: string;

  readonly isDevEnv: boolean;
}

export const appConfiguration = registerAs<IAppConfiguration>(APP_CONF, () => ({
  host: process.env.APP_HOST || '0.0.0.0',
  port: process.env.APP_PORT,

  get isDevEnv(): boolean {
    return process.env.NODE_ENV === 'development';
  },
}));
