import { OnWorkerEvent, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { type Job } from 'bullmq';

import { QueueStatus } from '../enums';

export abstract class BaseQueueProcessor extends WorkerHost {
  protected readonly logger = new Logger(this.constructor.name);

  @OnWorkerEvent(QueueStatus.active)
  onQueueActive(job: Job) {
    this.logger.debug(`Job has been started: ${job.id}`);
  }

  @OnWorkerEvent(QueueStatus.completed)
  onQueueComplete(job: Job) {
    this.logger.debug(`Job has been finished: ${job.id}`);
  }

  @OnWorkerEvent(QueueStatus.failed)
  onQueueFailed(job: Job, err: Error) {
    this.logger.debug(`Job has been failed: ${job.id}`);
    this.logger.error({ err });
  }
}
