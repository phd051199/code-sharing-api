import { Processor } from '@nestjs/bullmq';
import { type Job } from 'bullmq';
import dayjs from 'dayjs';

import { BaseQueueProcessor } from '@/common/base/base.processor';
import { PrismaService } from '@/prisma/prisma.service';

export const UPDATE_LAST_LOGIN_QUEUE = 'update:last-login';

@Processor(UPDATE_LAST_LOGIN_QUEUE)
export class UpdateLastLoginProcessor extends BaseQueueProcessor {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async process(job: Job) {
    this.logger.debug(`user_id:${job.data.id} ` + job.name);

    await this.updateLastLogin(job.data.id);
  }

  private async updateLastLogin(userId: number) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { last_login: { set: dayjs().toDate() } },
    });
  }
}
