import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserFavoriteWhereInput } from './user-favorite-where.input';

@InputType()
export class UserFavoriteListRelationFilter {

    @Field(() => UserFavoriteWhereInput, {nullable:true})
    every?: UserFavoriteWhereInput;

    @Field(() => UserFavoriteWhereInput, {nullable:true})
    some?: UserFavoriteWhereInput;

    @Field(() => UserFavoriteWhereInput, {nullable:true})
    none?: UserFavoriteWhereInput;
}
