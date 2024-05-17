import { type IQuery } from '@nestjs/cqrs';

export class GetUserByIdQuery implements IQuery {
  constructor(readonly id: number) {}
}
