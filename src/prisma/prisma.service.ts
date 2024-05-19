import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

import { APP_CFG } from '@/constants';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(readonly configService: ConfigService) {
    super({
      log: configService.get(APP_CFG).isDevEnv ? ['query'] : undefined,
    });
  }
}
