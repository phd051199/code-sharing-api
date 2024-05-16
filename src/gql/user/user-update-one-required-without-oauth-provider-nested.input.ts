import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOauthProviderInput } from './user-create-without-oauth-provider.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutOauthProviderInput } from './user-create-or-connect-without-oauth-provider.input';
import { UserUpsertWithoutOauthProviderInput } from './user-upsert-without-oauth-provider.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutOauthProviderInput } from './user-update-to-one-with-where-without-oauth-provider.input';

@InputType()
export class UserUpdateOneRequiredWithoutOauthProviderNestedInput {

    @Field(() => UserCreateWithoutOauthProviderInput, {nullable:true})
    @Type(() => UserCreateWithoutOauthProviderInput)
    create?: UserCreateWithoutOauthProviderInput;

    @Field(() => UserCreateOrConnectWithoutOauthProviderInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOauthProviderInput)
    connectOrCreate?: UserCreateOrConnectWithoutOauthProviderInput;

    @Field(() => UserUpsertWithoutOauthProviderInput, {nullable:true})
    @Type(() => UserUpsertWithoutOauthProviderInput)
    upsert?: UserUpsertWithoutOauthProviderInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutOauthProviderInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutOauthProviderInput)
    update?: UserUpdateToOneWithWhereWithoutOauthProviderInput;
}
