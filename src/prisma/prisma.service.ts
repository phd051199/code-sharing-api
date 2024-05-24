import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

import { APP_CFG } from '@/constants';

import { type PaginationArgs } from './paginate.interface';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(readonly configService: ConfigService) {
    super({
      log: !configService.get(APP_CFG).isDevEnv ? ['query'] : undefined,
    });
  }

  paginate(args?: PaginationArgs) {
    if (!args) return {};

    const { page, limit, take, skip } = args;
    const page_ = page ? Number(page) : 1;
    const limit_ = limit ? Number(limit) : 10;

    const query: Record<string, string | number> = {
      take: take ? take : limit_ === -1 ? undefined : limit_,
      skip: skip ? skip : limit_ === -1 ? 0 : (page_ - 1) * limit_,
    };

    return query;
  }
}
