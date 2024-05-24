import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserFavoriteWhereUniqueInput } from './user-favorite-where-unique.input';
import { Type } from 'class-transformer';
import { UserFavoriteCreateWithoutScriptInput } from './user-favorite-create-without-script.input';

@InputType()
export class UserFavoriteCreateOrConnectWithoutScriptInput {

    @Field(() => UserFavoriteWhereUniqueInput, {nullable:false})
    @Type(() => UserFavoriteWhereUniqueInput)
    where!: Prisma.AtLeast<UserFavoriteWhereUniqueInput, 'id' | 'userId_scriptId'>;

    @Field(() => UserFavoriteCreateWithoutScriptInput, {nullable:false})
    @Type(() => UserFavoriteCreateWithoutScriptInput)
    create!: UserFavoriteCreateWithoutScriptInput;
}
