import { type ICommand } from '@nestjs/cqrs';
import { type Script } from '@prisma/client';

export class CompileScriptCommand implements ICommand {
  constructor(
    public readonly filePath: string,
    public readonly script: Script,
  ) {}
}
