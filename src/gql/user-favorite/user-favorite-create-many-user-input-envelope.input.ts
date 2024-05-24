import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserFavoriteCreateManyUserInput } from './user-favorite-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserFavoriteCreateManyUserInputEnvelope {

    @Field(() => [UserFavoriteCreateManyUserInput], {nullable:false})
    @Type(() => UserFavoriteCreateManyUserInput)
    data!: Array<UserFavoriteCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
