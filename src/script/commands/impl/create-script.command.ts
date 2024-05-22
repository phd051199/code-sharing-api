import { type ICommand } from '@nestjs/cqrs';

export class CreateScriptCommand implements ICommand {
  constructor(public readonly userId: number) {}
}
