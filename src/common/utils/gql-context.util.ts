import { ExtractJwt } from 'passport-jwt';

import { type TokenService } from '@/token/token.service';

export const gqlContext = (req: Request, tokenService: TokenService) => {
  const token = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
  const { payload } = tokenService.verifyAccessToken(token);

  return {
    ...req,
    user: payload,
  };
};
