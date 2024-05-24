import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserFavoriteInput } from './user-create-without-user-favorite.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserFavoriteInput } from './user-create-or-connect-without-user-favorite.input';
import { UserUpsertWithoutUserFavoriteInput } from './user-upsert-without-user-favorite.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutUserFavoriteInput } from './user-update-to-one-with-where-without-user-favorite.input';

@InputType()
export class UserUpdateOneRequiredWithoutUserFavoriteNestedInput {

    @Field(() => UserCreateWithoutUserFavoriteInput, {nullable:true})
    @Type(() => UserCreateWithoutUserFavoriteInput)
    create?: UserCreateWithoutUserFavoriteInput;

    @Field(() => UserCreateOrConnectWithoutUserFavoriteInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserFavoriteInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserFavoriteInput;

    @Field(() => UserUpsertWithoutUserFavoriteInput, {nullable:true})
    @Type(() => UserUpsertWithoutUserFavoriteInput)
    upsert?: UserUpsertWithoutUserFavoriteInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutUserFavoriteInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutUserFavoriteInput)
    update?: UserUpdateToOneWithWhereWithoutUserFavoriteInput;
}
