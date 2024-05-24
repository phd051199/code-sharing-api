import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserFavoriteWhereUniqueInput } from './user-favorite-where-unique.input';
import { Type } from 'class-transformer';
import { UserFavoriteCreateWithoutUserInput } from './user-favorite-create-without-user.input';

@InputType()
export class UserFavoriteCreateOrConnectWithoutUserInput {

    @Field(() => UserFavoriteWhereUniqueInput, {nullable:false})
    @Type(() => UserFavoriteWhereUniqueInput)
    where!: Prisma.AtLeast<UserFavoriteWhereUniqueInput, 'id' | 'userId_scriptId'>;

    @Field(() => UserFavoriteCreateWithoutUserInput, {nullable:false})
    @Type(() => UserFavoriteCreateWithoutUserInput)
    create!: UserFavoriteCreateWithoutUserInput;
}
