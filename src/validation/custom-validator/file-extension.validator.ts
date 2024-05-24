import { FileValidator, Injectable } from '@nestjs/common';
import { type IFile } from '@nestjs/common/pipes/file/interfaces';
import _ from 'lodash';
import path from 'path';

type FileExtentionOptions = {
  accepted: string[];
};

@Injectable()
export class FileExtensionValidator extends FileValidator<FileExtentionOptions> {
  protected readonly validationOptions: FileExtentionOptions;
  constructor(options: FileExtentionOptions) {
    super(options);
    this.validationOptions = options;
  }

  override buildErrorMessage(): string {
    return `Actual file has unacceptable extentions. List of acceptable types: ${this.validationOptions.accepted.join(', ')}.`;
  }

  override isValid(
    file: IFile & {
      originalname: string;
    },
  ): boolean | Promise<boolean> {
    if (!this.validationOptions) {
      return true;
    }
    const extention = _.trimStart(path.extname(file.originalname), '.');
    return this.validationOptions.accepted.includes(extention);
  }
}
