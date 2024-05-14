import { type AuthInvalidError } from './auth-invalid.error';
import { type ForbiddenError } from './forbidden.error';
import { type InvalidArgumentsError } from './invalid-arguments.error';
import { type UnauthenticatedError } from './unauthenticated.error';

export * from './auth-invalid.error';
export * from './domain.error';
export * from './forbidden.error';
export * from './invalid-arguments.error';
export * from './unauthenticated.error';

export interface AllErrors {
  InvalidArgumentsError: InvalidArgumentsError;
  AuthInvalidError: AuthInvalidError;
  UnauthenticatedError: UnauthenticatedError;
  ForbiddenError: ForbiddenError;
}
