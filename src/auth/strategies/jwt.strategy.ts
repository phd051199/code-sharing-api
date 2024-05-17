import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { QueryBus } from '@nestjs/cqrs';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { type TokenPayload } from '@/token/types';
import { GetUserByIdQuery } from '@/user/queries';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    protected readonly configService: ConfigService,
    private readonly queryBus: QueryBus,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_CFG.secret'),
      ignoreExpiration: false,
    });
  }

  validate(payload: TokenPayload) {
    return this.queryBus.execute(new GetUserByIdQuery(payload.uid));
  }
}
