import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { type Job } from 'bullmq';
import dayjs from 'dayjs';

import { UserService } from '@/user/user.service';

export const update_last_login_queue = 'update:last-login';

@Processor(update_last_login_queue)
export class UpdateLastLoginProcessor extends WorkerHost {
  constructor(private readonly userService: UserService) {
    super();
  }

  async process(job: Job) {
    Logger.debug(`user_id:${job.data.id} ` + job.name, this.constructor.name);

    await this.updateLastLogin(job.data.id);
  }

  async updateLastLogin(userId: number) {
    await this.userService.update({
      where: { id: userId },
      data: { lastLogin: { set: dayjs().toDate() } },
    });
  }
}
