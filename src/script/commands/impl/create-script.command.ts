import { type ICommand } from '@nestjs/cqrs';

import { type ScriptUncheckedCreateInput } from '@/gql/script';

export class CreateScriptCommand implements ICommand {
  constructor(
    public readonly input: ScriptUncheckedCreateInput,
    public readonly userId: number,
  ) {}
}
