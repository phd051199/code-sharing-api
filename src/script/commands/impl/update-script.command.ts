import { type ICommand } from '@nestjs/cqrs';

export class UpdateScriptCommand implements ICommand {
  constructor(
    public readonly id: number,
    public readonly bundle: string,
    public readonly path: string,
  ) {}
}
