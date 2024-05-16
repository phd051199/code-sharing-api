import { Field, ObjectType } from '@nestjs/graphql';

import { User } from '@/gql/user';

@ObjectType()
export class AuthResponse {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;

  @Field(() => User)
  user?: User;
}
