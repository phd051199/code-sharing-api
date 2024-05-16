import {
  Injectable,
  Logger,
  type OnModuleDestroy,
  type OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron } from '@nestjs/schedule';
import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

import { APP_CFG } from '@/constants';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(
    readonly configService: ConfigService,
    private readonly logger: Logger,
  ) {
    super({
      log: configService.get(APP_CFG).isDevEnv && ['query'],
    });
  }

  get withAccelerate() {
    return this.$extends(withAccelerate());
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  @Cron('*/5 * * * *')
  async keepAlive() {
    this.logger.verbose('cron job: keep alive', this.constructor.name);
    await this.$queryRaw`SELECT 1`;
  }
}
