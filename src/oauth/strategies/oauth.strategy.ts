import { Injectable, mixin, type Type } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { memoize } from '@nestjs/passport/dist/utils/memoize.util';
import { AuthProviders } from '@prisma/client';
import _ from 'lodash';
import { type Strategy } from 'passport';
import {
  type Profile as GithubProfile,
  Strategy as GithubStrategy,
} from 'passport-github2';
import {
  type Profile as GoogleProfile,
  Strategy as GoogleStrategy,
} from 'passport-google-oauth20';

export const OAuthStrategy: (provider: AuthProviders) => Type<Strategy> =
  memoize(createOAuthStrategyFactory);

function createOAuthStrategyFactory(provider: AuthProviders): Type<Strategy> {
  let strategy: Type<Strategy>;

  switch (provider) {
    case AuthProviders.github:
      strategy = GithubStrategy;
      break;
    case AuthProviders.google:
      strategy = GoogleStrategy;
      break;
    default:
      throw new Error(`Unsupported OAuth provider: ${provider}`);
  }

  @Injectable()
  class OAuthStrategyMixin extends PassportStrategy(strategy, provider) {
    constructor(readonly configService: ConfigService) {
      const { id, secret, callbackURL } = configService.get(
        `oauth.${provider}`,
      );

      super({
        clientID: id,
        clientSecret: secret,
        callbackURL: callbackURL,
        scope: ['email', 'profile'],
      });
    }

    validate(
      accessToken: string,
      _refreshToken: string,
      profile: GithubProfile | GoogleProfile,
    ) {
      const { emails, photos, displayName, provider } = profile;

      return {
        email: _.first(emails).value,
        picture: _.first(photos).value,
        accessToken,
        name: displayName,
        provider,
      };
    }
  }

  return mixin(OAuthStrategyMixin);
}
