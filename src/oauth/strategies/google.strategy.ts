import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { first } from 'lodash';
import { type Profile, Strategy } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(readonly configService: ConfigService) {
    const { id, secret, callbackURL } = configService.get('oauth.google');

    super({
      clientID: id,
      clientSecret: secret,
      callbackURL: callbackURL,
      scope: ['email', 'profile'],
    });
  }

  validate(accessToken: string, refreshToken: string, profile: Profile) {
    const { name, emails, photos, displayName, provider } = profile;
    const user = {
      email: first(emails).value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: first(photos).value,
      accessToken,
      name: displayName,
      provider,
    };

    return user;
  }
}
