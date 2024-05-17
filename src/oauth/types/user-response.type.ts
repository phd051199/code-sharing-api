import { type AuthProviders } from '@prisma/client';

export type GoogleUser = {
  provider: AuthProviders;
  name: string;
  picture?: string;
  email: string;
};

export type GithubUser = {
  provider: AuthProviders;
  name: string;
  email: string;
  picture?: string;
};
