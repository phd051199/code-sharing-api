import { type TokenStatus } from '../enums';
import { type TokenPayload } from './token-payload.type';

export type TokenResponse = {
  payload: TokenPayload;
  tokenStatus: TokenStatus;
};
