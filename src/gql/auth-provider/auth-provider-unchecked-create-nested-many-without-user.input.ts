import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviderCreateWithoutUserInput } from './auth-provider-create-without-user.input';
import { Type } from 'class-transformer';
import { AuthProviderCreateOrConnectWithoutUserInput } from './auth-provider-create-or-connect-without-user.input';
import { AuthProviderCreateManyUserInputEnvelope } from './auth-provider-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AuthProviderWhereUniqueInput } from './auth-provider-where-unique.input';

@InputType()
export class AuthProviderUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [AuthProviderCreateWithoutUserInput], {nullable:true})
    @Type(() => AuthProviderCreateWithoutUserInput)
    create?: Array<AuthProviderCreateWithoutUserInput>;

    @Field(() => [AuthProviderCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AuthProviderCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AuthProviderCreateOrConnectWithoutUserInput>;

    @Field(() => AuthProviderCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AuthProviderCreateManyUserInputEnvelope)
    createMany?: AuthProviderCreateManyUserInputEnvelope;

    @Field(() => [AuthProviderWhereUniqueInput], {nullable:true})
    @Type(() => AuthProviderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AuthProviderWhereUniqueInput, 'provider_userId'>>;
}
