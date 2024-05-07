import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import _ from 'lodash';
import { DataSource } from 'typeorm';

import { ORM_CONF } from '@/constants';

@Injectable()
export class InfoSchemaRepository {
  constructor(
    private readonly configService: ConfigService,
    private readonly logger: Logger,
  ) {}

  async getTables(): Promise<string[]> {
    const dbConnection = new DataSource(this.configService.get(ORM_CONF));
    const dataSource = await dbConnection.initialize();

    try {
      const result = await dataSource
        .createQueryBuilder()
        .select('TABLE_NAME')
        .from('information_schema.tables', 'tables')
        .where('TABLE_SCHEMA = :schema', { schema: 'test_db' })
        .getRawMany();

      return _.map(result, 'TABLE_NAME');
    } catch (error) {
      this.logger.error(error);
    } finally {
      await dbConnection.destroy();
    }
  }
}
