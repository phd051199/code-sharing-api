import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { type Job } from 'bullmq';
import dayjs from 'dayjs';

import { UserService } from '@/user/user.service';

@Processor('update:user')
export class UpdateUserProcessor extends WorkerHost {
  constructor(private readonly userService: UserService) {
    super();
  }

  async process(job: Job) {
    switch (job.name) {
      case 'update-last-login':
        Logger.debug(
          `userId:${job.data.id} ` + job.name,
          this.constructor.name,
        );

        await this.userService.update({
          where: { id: job.data.id },
          data: { lastLogin: { set: dayjs().toDate() } },
        });

      default:
        throw new Error('No job name match');
    }
  }
}
