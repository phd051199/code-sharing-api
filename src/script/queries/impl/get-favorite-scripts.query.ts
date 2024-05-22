import { type IQuery } from '@nestjs/cqrs';

export class GetFavoriteScriptsQuery implements IQuery {
  constructor(public readonly userId: number) {}
}
