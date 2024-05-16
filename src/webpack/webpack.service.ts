import { Injectable } from '@nestjs/common';
import webpack from 'webpack';

import { webpackConfiguration } from './webpack.config';

@Injectable()
export class WebpackService {
  private compiler = webpack(webpackConfiguration);

  compile() {
    return this.compiler.run(() => {});
  }
}
