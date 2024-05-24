import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserFavoriteWhereUniqueInput } from './user-favorite-where-unique.input';
import { Type } from 'class-transformer';
import { UserFavoriteUpdateWithoutScriptInput } from './user-favorite-update-without-script.input';
import { UserFavoriteCreateWithoutScriptInput } from './user-favorite-create-without-script.input';

@InputType()
export class UserFavoriteUpsertWithWhereUniqueWithoutScriptInput {

    @Field(() => UserFavoriteWhereUniqueInput, {nullable:false})
    @Type(() => UserFavoriteWhereUniqueInput)
    where!: Prisma.AtLeast<UserFavoriteWhereUniqueInput, 'id' | 'userId_scriptId'>;

    @Field(() => UserFavoriteUpdateWithoutScriptInput, {nullable:false})
    @Type(() => UserFavoriteUpdateWithoutScriptInput)
    update!: UserFavoriteUpdateWithoutScriptInput;

    @Field(() => UserFavoriteCreateWithoutScriptInput, {nullable:false})
    @Type(() => UserFavoriteCreateWithoutScriptInput)
    create!: UserFavoriteCreateWithoutScriptInput;
}
