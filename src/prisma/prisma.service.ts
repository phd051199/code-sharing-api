import {
  Injectable,
  Logger,
  type OnModuleDestroy,
  type OnModuleInit,
} from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(private readonly logger: Logger) {
    super({
      log: ['query'],
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  @Cron('*/2 * * * *')
  async keepAlive() {
    this.logger.log('cron job: keep alive', this.constructor.name);

    await this.$queryRaw`SELECT 1`;
  }
}
