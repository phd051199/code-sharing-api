import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DataGeneratorResolver } from './data-generator.resolver';
import { QueryHandlers } from './queries/handlers';
import { InfoSchemaRepository } from './repositories/info-schema.repository';

@Module({
  imports: [ConfigModule],
  providers: [
    ...QueryHandlers,
    Logger,
    InfoSchemaRepository,
    DataGeneratorResolver,
  ],
})
export class DataGeneratorModule {}
