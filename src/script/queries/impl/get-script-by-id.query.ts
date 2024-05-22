import { type IQuery } from '@nestjs/cqrs';

export class GetScriptByIdQuery implements IQuery {
  constructor(public readonly id: number) {}
}
