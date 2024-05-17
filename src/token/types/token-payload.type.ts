import { type Role } from '@prisma/client';

export type TokenPayload = {
  email: string;
  uid: number;
  sub: string;
  iat: number;
  exp: number;
  role: Role;
};
