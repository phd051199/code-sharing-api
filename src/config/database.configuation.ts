import { registerAs } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { ORM } from '../constants';

export const typeormConfiguration = registerAs<TypeOrmModuleOptions>(
  ORM,
  () => ({
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    autoLoadEntities: true,
    synchronize: false,
  }),
);
