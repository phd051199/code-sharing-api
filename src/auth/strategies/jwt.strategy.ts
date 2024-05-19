import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { type FastifyRequest } from 'fastify';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { JWT_CFG } from '@/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { type TokenPayload } from '@/token/types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    protected readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtStrategy.extractTokenFromCookies,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      secretOrKey: configService.get<string>(`${JWT_CFG}.secret`),
      ignoreExpiration: false,
    });
  }

  validate(payload: TokenPayload) {
    return this.prisma.user.findUnique({
      where: { id: payload.uid },
      include: {
        role: {
          include: {
            permissions: true,
          },
        },
      },
    });
  }

  private static extractTokenFromCookies(req: FastifyRequest) {
    return req.cookies.access_token || null;
  }
}
