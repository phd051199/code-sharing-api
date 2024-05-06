import { registerAs } from '@nestjs/config';

import { APP } from '../constants';
import type { IAppConfiguration } from './interfaces/app.configuration.interface';

export const appConfiguration = registerAs<IAppConfiguration>(APP, () => ({
  host: process.env.APP_HOST,
  port: process.env.APP_PORT,
  version: process.env.APP_VERSION,
}));
