import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, validateSync } from 'class-validator';

class EnvironmentVariables {
  @IsNotEmpty()
  readonly APP_HOST: string;

  @IsNotEmpty()
  readonly APP_PORT: string;

  @IsNotEmpty()
  readonly APP_VERSION: string;

  @IsNotEmpty()
  readonly MYSQL_HOST: string;

  @IsNotEmpty()
  readonly MYSQL_PORT: string;

  @IsNotEmpty()
  readonly MYSQL_USERNAME: string;

  @IsNotEmpty()
  readonly MYSQL_PASSWORD: string;

  @IsNotEmpty()
  readonly MYSQL_DB_NAME: string;

  @IsNotEmpty()
  readonly REDIS_HOST: string;

  @IsNotEmpty()
  readonly REDIS_PORT: string;

  @IsNotEmpty()
  readonly REDIS_PASSWORD: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
