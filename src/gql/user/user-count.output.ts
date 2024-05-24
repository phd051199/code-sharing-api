import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    authProviders?: number;

    @Field(() => Int, {nullable:false})
    scripts?: number;

    @Field(() => Int, {nullable:false})
    userFavorite?: number;
}
