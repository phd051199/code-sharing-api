import { Inject, Injectable } from '@nestjs/common';

import { REDIS_CLIENT } from '@/constants';

import { RedisClient } from './redis.provider';

@Injectable()
export class RedisService {
  constructor(@Inject(REDIS_CLIENT) private readonly client: RedisClient) {}

  async set(
    prefix: string,
    key: string,
    value: string | Buffer | number,
    expirationSeconds?: number,
  ) {
    await this.client.set(`${prefix}:` + key, value, 'EX', expirationSeconds);
  }

  getString(prefix: string, key: string): Promise<string> {
    return this.client.get(`${prefix}:` + key);
  }

  async getInt(prefix: string, key: string): Promise<number> {
    const result = await this.client.get(`${prefix}:` + key);
    return Number(result);
  }
}
