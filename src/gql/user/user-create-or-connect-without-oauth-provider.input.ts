import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOauthProviderInput } from './user-create-without-oauth-provider.input';

@InputType()
export class UserCreateOrConnectWithoutOauthProviderInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutOauthProviderInput, {nullable:false})
    @Type(() => UserCreateWithoutOauthProviderInput)
    create!: UserCreateWithoutOauthProviderInput;
}
