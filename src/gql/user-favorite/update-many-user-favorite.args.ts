import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserFavoriteUpdateManyMutationInput } from './user-favorite-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserFavoriteWhereInput } from './user-favorite-where.input';

@ArgsType()
export class UpdateManyUserFavoriteArgs {

    @Field(() => UserFavoriteUpdateManyMutationInput, {nullable:false})
    @Type(() => UserFavoriteUpdateManyMutationInput)
    data!: UserFavoriteUpdateManyMutationInput;

    @Field(() => UserFavoriteWhereInput, {nullable:true})
    @Type(() => UserFavoriteWhereInput)
    where?: UserFavoriteWhereInput;
}
