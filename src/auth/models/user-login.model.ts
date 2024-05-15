import { User } from '@generated/user';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserLogin {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;

  @Field(() => User)
  user: User;
}
