import { type Role } from '@prisma/client';

import { type TokenStatus } from '../../token/enums/token-status.enum';

export type JUser = {
  iss: string;
  email: string;
  id: string;
  sub: string;
  iat: number;
  exp: number;
  role: Role;
};

export type Context = {
  req: Request;
  user?: JUser;
  tokenStatus: TokenStatus;
};
