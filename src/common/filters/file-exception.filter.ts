import { type ExecutionContext } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { rmSync } from 'fs';

import { extractContext } from '../utils';

export class FileExceptionFilter extends BaseExceptionFilter {
  catch(exception: Error, context: ExecutionContext) {
    const { req } = extractContext(context);

    const file = req.file;
    if (file) {
      rmSync(file.destination, {
        force: true,
        recursive: true,
      });
    }

    super.catch(exception, context);
  }
}
