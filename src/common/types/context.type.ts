import { type Role } from '@prisma/client';

import { type TokenStatus } from '@/token/enums/token-status.enum';

export type TokenPayload = {
  iss: string;
  email: string;
  uid: number;
  sub: string;
  iat: number;
  exp: number;
  role: Role;
};

export type Context = {
  req: Request;
  user?: TokenPayload;
  tokenStatus: TokenStatus;
};
