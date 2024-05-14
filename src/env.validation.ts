import { Logger } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  validateSync,
  type ValidatorOptions,
} from 'class-validator';

import { mapEnvError } from '@/common/utils';

export class Env {
  @IsOptional() NODE_ENV?: string;

  @IsOptional() APP_HOST?: string;
  @IsNotEmpty() APP_PORT: string;

  @IsNotEmpty() REDIS_HOST: string;
  @IsOptional() REDIS_PORT?: string;
  @IsOptional() REDIS_PASSWORD?: string;

  @IsNotEmpty() MINIO_ENDPOINT: string;
  @IsNotEmpty() MINIO_PORT: string;
  @IsNotEmpty() MINIO_ACCESSKEY: string;
  @IsNotEmpty() MINIO_SECRETKEY: string;
  @IsNotEmpty() MINIO_BUCKET: string;

  @IsNotEmpty() JWT_SECRET: string;

  static validate(plain: typeof Env) {
    const options: ValidatorOptions = {
      skipMissingProperties: false,
    };

    const object = plainToInstance(Env, plain, {
      enableImplicitConversion: true,
    });

    const errors = validateSync(object, options);

    if (errors.length > 0) {
      Logger.error('\n' + mapEnvError(errors), 'EnvValidation');
      process.exit(1);
    }

    return object;
  }
}
