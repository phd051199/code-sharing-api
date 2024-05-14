import { Field, ObjectType } from '@nestjs/graphql';

import { User } from '@/common/gql/user';

@ObjectType()
export class UserLogin {
  @Field()
  token: string;

  @Field(() => User)
  user: User;
}
