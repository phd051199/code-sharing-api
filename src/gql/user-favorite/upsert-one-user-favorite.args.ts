import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserFavoriteWhereUniqueInput } from './user-favorite-where-unique.input';
import { Type } from 'class-transformer';
import { UserFavoriteCreateInput } from './user-favorite-create.input';
import { UserFavoriteUpdateInput } from './user-favorite-update.input';

@ArgsType()
export class UpsertOneUserFavoriteArgs {

    @Field(() => UserFavoriteWhereUniqueInput, {nullable:false})
    @Type(() => UserFavoriteWhereUniqueInput)
    where!: Prisma.AtLeast<UserFavoriteWhereUniqueInput, 'id' | 'userId_scriptId'>;

    @Field(() => UserFavoriteCreateInput, {nullable:false})
    @Type(() => UserFavoriteCreateInput)
    create!: UserFavoriteCreateInput;

    @Field(() => UserFavoriteUpdateInput, {nullable:false})
    @Type(() => UserFavoriteUpdateInput)
    update!: UserFavoriteUpdateInput;
}
