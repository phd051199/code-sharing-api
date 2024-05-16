import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOauthProvidersInput } from './user-create-without-oauth-providers.input';

@InputType()
export class UserCreateOrConnectWithoutOauthProvidersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutOauthProvidersInput, {nullable:false})
    @Type(() => UserCreateWithoutOauthProvidersInput)
    create!: UserCreateWithoutOauthProvidersInput;
}
