import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserFavoriteInput } from './user-create-without-user-favorite.input';

@InputType()
export class UserCreateOrConnectWithoutUserFavoriteInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutUserFavoriteInput, {nullable:false})
    @Type(() => UserCreateWithoutUserFavoriteInput)
    create!: UserCreateWithoutUserFavoriteInput;
}
