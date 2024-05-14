import { plainToInstance } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  validateSync,
  type ValidatorOptions,
} from 'class-validator';

export class Env {
  @IsNotEmpty() APP_PORT: string;
  @IsOptional() APP_VERSION?: string;

  @IsNotEmpty() REDIS_HOST: string;
  @IsOptional() REDIS_PORT?: string;
  @IsOptional() REDIS_PASSWORD?: string;

  @IsNotEmpty() MINIO_ENDPOINT: string;
  @IsNotEmpty() MINIO_PORT: string;
  @IsNotEmpty() MINIO_ACCESSKEY: string;
  @IsNotEmpty() MINIO_SECRETKEY: string;
  @IsNotEmpty() MINIO_BUCKET: string;

  @IsNotEmpty() JWT_SECRET: string;

  static validate(plain: Record<string, string>) {
    const options: ValidatorOptions = {
      skipMissingProperties: false,
    };

    const object = plainToInstance(Env, plain, {
      enableImplicitConversion: true,
    });
    const errors = validateSync(object, options);

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }

    return object;
  }
}
