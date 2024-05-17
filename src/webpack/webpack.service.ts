import { Injectable } from '@nestjs/common';
import webpack, { type Compiler } from 'webpack';

import { webpackConfiguration } from './webpack.config';

@Injectable()
export class WebpackService {
  private readonly compiler: Compiler;

  constructor() {
    this.compiler = webpack(webpackConfiguration);
  }

  compile() {
    return this.compiler.run(() => {});
  }
}
