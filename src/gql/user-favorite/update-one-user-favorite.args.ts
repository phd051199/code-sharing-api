import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserFavoriteUpdateInput } from './user-favorite-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserFavoriteWhereUniqueInput } from './user-favorite-where-unique.input';

@ArgsType()
export class UpdateOneUserFavoriteArgs {

    @Field(() => UserFavoriteUpdateInput, {nullable:false})
    @Type(() => UserFavoriteUpdateInput)
    data!: UserFavoriteUpdateInput;

    @Field(() => UserFavoriteWhereUniqueInput, {nullable:false})
    @Type(() => UserFavoriteWhereUniqueInput)
    where!: Prisma.AtLeast<UserFavoriteWhereUniqueInput, 'id' | 'userId_scriptId'>;
}
