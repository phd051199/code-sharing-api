import { registerAs } from '@nestjs/config';

import { APP_CFG } from '../constants';
import { type AppConfiguration } from './types';

export const appConfiguration = registerAs<AppConfiguration>(APP_CFG, () => ({
  host: process.env.APP_HOST || '0.0.0.0',
  port: process.env.APP_PORT,

  get isDevEnv(): boolean {
    return process.env.NODE_ENV === 'development';
  },
}));
