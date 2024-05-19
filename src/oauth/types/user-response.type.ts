import { type AuthProviders } from '@prisma/client';

export type GoogleUser = {
  provider: AuthProviders;
  displayName: string;
  picture?: string;
  email: string;
};

export type GithubUser = {
  provider: AuthProviders;
  displayName: string;
  email: string;
  picture?: string;
};
