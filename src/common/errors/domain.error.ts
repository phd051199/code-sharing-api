export type ErrorCode =
  | 'object_not_found'
  | 'object_already_exists'
  | 'invalid_password_format'
  | 'invalid_arguments'
  | 'auth_invalid'
  | 'unauthenticated'
  | 'invalid_token'
  | 'forbidden';

export interface DomainErrorParams<Err extends ErrorCode> {
  message: string;
  name: string;
  code: Err;
}

export class DomainError<
  Err extends ErrorCode,
  TMetadata extends Record<string, unknown> | undefined = undefined,
> extends Error {
  readonly metadata?: TMetadata;

  readonly name: string;

  readonly code: Err;

  constructor({ message, name, code }: DomainErrorParams<Err>) {
    super(message);

    this.name = name;
    this.code = code;
  }
}
