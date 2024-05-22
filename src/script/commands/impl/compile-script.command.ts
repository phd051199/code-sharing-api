import { type ICommand } from '@nestjs/cqrs';

export class CompileScriptCommand implements ICommand {
  constructor(
    public readonly fileData: string | Buffer | NodeJS.ReadableStream,
    public readonly scriptId: number,
  ) {}
}
