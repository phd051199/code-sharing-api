import { plainToInstance } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  validateSync,
  type ValidatorOptions,
} from 'class-validator';

export class EnvVars {
  @IsNotEmpty() APP_PORT: string;
  @IsOptional() APP_VERSION?: string;

  @IsNotEmpty() MYSQL_HOST: string;
  @IsNotEmpty() MYSQL_PORT: string;
  @IsNotEmpty() MYSQL_USERNAME: string;
  @IsOptional() MYSQL_PASSWORD?: string;
  @IsNotEmpty() MYSQL_DB_NAME: string;

  @IsNotEmpty() REDIS_HOST: string;
  @IsNotEmpty() REDIS_PORT: string;
  @IsOptional() REDIS_PASSWORD?: string;

  @IsNotEmpty() MINIO_ENDPOINT: string;
  @IsNotEmpty() MINIO_PORT: string;
  @IsNotEmpty() MINIO_ACCESSKEY: string;
  @IsNotEmpty() MINIO_SECRETKEY: string;
  @IsNotEmpty() MINIO_BUCKET: string;

  static validate(plain: Record<string, string>): EnvVars {
    const options: ValidatorOptions = {
      skipMissingProperties: false,
    };

    const object = plainToInstance(EnvVars, plain, {
      enableImplicitConversion: true,
    });
    const errors = validateSync(object, options);

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }

    return object;
  }
}
