import { type ICommand } from '@nestjs/cqrs';

export class UploadScriptCommand implements ICommand {
  constructor(
    public readonly scriptId: number,
    public readonly fileName: string,
    public readonly filePath: string,
    public readonly bundlePath: string,
  ) {}
}
