import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DataGeneratorController } from './data-generator.controller';
import { QueryHandlers } from './queries/handlers';
import { InfoSchemaRepository } from './repositories/info-schema.repository';

@Module({
  imports: [ConfigModule],
  controllers: [DataGeneratorController],
  providers: [...QueryHandlers, Logger, InfoSchemaRepository],
})
export class DataGeneratorModule {}
