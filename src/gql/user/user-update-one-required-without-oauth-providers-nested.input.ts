import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOauthProvidersInput } from './user-create-without-oauth-providers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutOauthProvidersInput } from './user-create-or-connect-without-oauth-providers.input';
import { UserUpsertWithoutOauthProvidersInput } from './user-upsert-without-oauth-providers.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutOauthProvidersInput } from './user-update-to-one-with-where-without-oauth-providers.input';

@InputType()
export class UserUpdateOneRequiredWithoutOauthProvidersNestedInput {

    @Field(() => UserCreateWithoutOauthProvidersInput, {nullable:true})
    @Type(() => UserCreateWithoutOauthProvidersInput)
    create?: UserCreateWithoutOauthProvidersInput;

    @Field(() => UserCreateOrConnectWithoutOauthProvidersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOauthProvidersInput)
    connectOrCreate?: UserCreateOrConnectWithoutOauthProvidersInput;

    @Field(() => UserUpsertWithoutOauthProvidersInput, {nullable:true})
    @Type(() => UserUpsertWithoutOauthProvidersInput)
    upsert?: UserUpsertWithoutOauthProvidersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutOauthProvidersInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutOauthProvidersInput)
    update?: UserUpdateToOneWithWhereWithoutOauthProvidersInput;
}
