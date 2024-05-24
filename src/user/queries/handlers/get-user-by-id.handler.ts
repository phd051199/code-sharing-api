import { Injectable } from '@nestjs/common';
import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { UserService } from '@/user/services';

import { GetUserByIdQuery } from '../impl/get-user-by-id.query';

@Injectable()
@QueryHandler(GetUserByIdQuery)
export class GetUserByIdQueryHandler
  implements IQueryHandler<GetUserByIdQuery>
{
  constructor(private readonly userService: UserService) {}

  execute(query: GetUserByIdQuery) {
    return this.userService.findUnique(query.id);
  }
}
