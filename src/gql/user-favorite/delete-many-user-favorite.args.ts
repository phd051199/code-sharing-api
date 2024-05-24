import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserFavoriteWhereInput } from './user-favorite-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserFavoriteArgs {

    @Field(() => UserFavoriteWhereInput, {nullable:true})
    @Type(() => UserFavoriteWhereInput)
    where?: UserFavoriteWhereInput;
}
