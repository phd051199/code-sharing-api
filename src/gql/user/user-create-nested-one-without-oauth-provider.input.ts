import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOauthProviderInput } from './user-create-without-oauth-provider.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutOauthProviderInput } from './user-create-or-connect-without-oauth-provider.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutOauthProviderInput {

    @Field(() => UserCreateWithoutOauthProviderInput, {nullable:true})
    @Type(() => UserCreateWithoutOauthProviderInput)
    create?: UserCreateWithoutOauthProviderInput;

    @Field(() => UserCreateOrConnectWithoutOauthProviderInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOauthProviderInput)
    connectOrCreate?: UserCreateOrConnectWithoutOauthProviderInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
