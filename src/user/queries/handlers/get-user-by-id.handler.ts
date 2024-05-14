import { Injectable } from '@nestjs/common';
import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { UserService } from '@/user/user.service';

import { GetUserByIdQuery } from '../impl/get-user-by-id.query';

@Injectable()
@QueryHandler(GetUserByIdQuery)
export class GetUserByIdHandler implements IQueryHandler<GetUserByIdQuery> {
  constructor(private readonly userService: UserService) {}

  execute(query: GetUserByIdQuery) {
    return this.userService.findId(query.id);
  }
}
