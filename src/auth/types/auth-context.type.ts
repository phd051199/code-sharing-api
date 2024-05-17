import { type FastifyRequest } from 'fastify';

import { type TokenStatus } from '@/token/enums';
import { type TokenPayload } from '@/token/types';

export type AuthContext = {
  req: FastifyRequest;
  user?: TokenPayload;
  tokenStatus: TokenStatus;
};
