import { type IQuery } from '@nestjs/cqrs';

import { type FindUniqueUserOrThrowArgs } from '@/common/gql/user';

export class GetUserQuery implements IQuery {
  constructor(public readonly args: FindUniqueUserOrThrowArgs) {}
}
