import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuthProviderWhereUniqueInput } from './auth-provider-where-unique.input';
import { Type } from 'class-transformer';
import { AuthProviderCreateWithoutUserInput } from './auth-provider-create-without-user.input';

@InputType()
export class AuthProviderCreateOrConnectWithoutUserInput {

    @Field(() => AuthProviderWhereUniqueInput, {nullable:false})
    @Type(() => AuthProviderWhereUniqueInput)
    where!: Prisma.AtLeast<AuthProviderWhereUniqueInput, 'provider_userId'>;

    @Field(() => AuthProviderCreateWithoutUserInput, {nullable:false})
    @Type(() => AuthProviderCreateWithoutUserInput)
    create!: AuthProviderCreateWithoutUserInput;
}
