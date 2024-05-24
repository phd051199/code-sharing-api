import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserFavoriteWhereUniqueInput } from './user-favorite-where-unique.input';
import { Type } from 'class-transformer';
import { UserFavoriteUpdateWithoutScriptInput } from './user-favorite-update-without-script.input';

@InputType()
export class UserFavoriteUpdateWithWhereUniqueWithoutScriptInput {

    @Field(() => UserFavoriteWhereUniqueInput, {nullable:false})
    @Type(() => UserFavoriteWhereUniqueInput)
    where!: Prisma.AtLeast<UserFavoriteWhereUniqueInput, 'id' | 'userId_scriptId'>;

    @Field(() => UserFavoriteUpdateWithoutScriptInput, {nullable:false})
    @Type(() => UserFavoriteUpdateWithoutScriptInput)
    data!: UserFavoriteUpdateWithoutScriptInput;
}
