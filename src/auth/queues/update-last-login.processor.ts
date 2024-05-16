import { Processor } from '@nestjs/bullmq';
import { type Job } from 'bullmq';
import dayjs from 'dayjs';

import { BaseQueueProcessor } from '@/common/base/base.processor';
import { UserService } from '@/user/user.service';

export const update_last_login_queue = 'update:last-login';

@Processor(update_last_login_queue)
export class UpdateLastLoginProcessor extends BaseQueueProcessor {
  constructor(private readonly userService: UserService) {
    super();
  }

  async process(job: Job) {
    this.logger.debug(`user_id:${job.data.id} ` + job.name);

    await this.updateLastLogin(job.data.id);
  }

  private async updateLastLogin(userId: number) {
    await this.userService.update({
      where: { id: userId },
      data: { lastLogin: { set: dayjs().toDate() } },
    });
  }
}
