import { Module } from '@nestjs/common';

import { WebpackService } from './webpack.service';

@Module({
  providers: [WebpackService],
  exports: [WebpackService],
})
export class WebpackModule {}
