import { Injectable } from '@nestjs/common';
import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { UserService } from '@/user/user.service';

import { GetUserQuery } from '../impl/get-user.query';

@Injectable()
@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  constructor(private readonly userService: UserService) {}

  execute(query: GetUserQuery) {
    return this.userService.findUnique(query.args);
  }
}
