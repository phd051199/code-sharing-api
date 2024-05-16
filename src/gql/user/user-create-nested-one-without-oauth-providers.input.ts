import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOauthProvidersInput } from './user-create-without-oauth-providers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutOauthProvidersInput } from './user-create-or-connect-without-oauth-providers.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutOauthProvidersInput {

    @Field(() => UserCreateWithoutOauthProvidersInput, {nullable:true})
    @Type(() => UserCreateWithoutOauthProvidersInput)
    create?: UserCreateWithoutOauthProvidersInput;

    @Field(() => UserCreateOrConnectWithoutOauthProvidersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOauthProvidersInput)
    connectOrCreate?: UserCreateOrConnectWithoutOauthProvidersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
