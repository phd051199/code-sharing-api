import { registerAs } from '@nestjs/config';
import { type JwtModuleOptions } from '@nestjs/jwt';

import { JWT_CFG } from '@/constants';

type Client = {
  id: string;
  secret: string;
  callbackURL: string;
};

type OAuthConfiguration = {
  google?: Client;
  github?: Client;
};

export const jwtConfiguration = registerAs<JwtModuleOptions>(JWT_CFG, () => ({
  secret: process.env.JWT_SECRET,
}));

export const oauthConfiguration = registerAs<OAuthConfiguration>(
  'oauth',
  () => ({
    google: {
      id: process.env.GOOGLE_CLIENT_ID,
      secret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_AUTH_CALLBACK_URL,
    },
  }),
);

export const cookieConfiguration = registerAs('cookie', () => ({
  secret: process.env.COOKIE_SECRET,
}));
