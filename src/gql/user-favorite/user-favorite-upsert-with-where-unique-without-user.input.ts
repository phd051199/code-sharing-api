import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserFavoriteWhereUniqueInput } from './user-favorite-where-unique.input';
import { Type } from 'class-transformer';
import { UserFavoriteUpdateWithoutUserInput } from './user-favorite-update-without-user.input';
import { UserFavoriteCreateWithoutUserInput } from './user-favorite-create-without-user.input';

@InputType()
export class UserFavoriteUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UserFavoriteWhereUniqueInput, {nullable:false})
    @Type(() => UserFavoriteWhereUniqueInput)
    where!: Prisma.AtLeast<UserFavoriteWhereUniqueInput, 'id' | 'userId_scriptId'>;

    @Field(() => UserFavoriteUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserFavoriteUpdateWithoutUserInput)
    update!: UserFavoriteUpdateWithoutUserInput;

    @Field(() => UserFavoriteCreateWithoutUserInput, {nullable:false})
    @Type(() => UserFavoriteCreateWithoutUserInput)
    create!: UserFavoriteCreateWithoutUserInput;
}
