import { type IQuery } from '@nestjs/cqrs';

export class GetSelfScriptsQuery implements IQuery {
  constructor(public readonly userId: number) {}
}
