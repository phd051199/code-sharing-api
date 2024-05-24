import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserFavoriteCreateManyInput } from './user-favorite-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserFavoriteArgs {

    @Field(() => [UserFavoriteCreateManyInput], {nullable:false})
    @Type(() => UserFavoriteCreateManyInput)
    data!: Array<UserFavoriteCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
