import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviderCreateWithoutUserInput } from './auth-provider-create-without-user.input';
import { Type } from 'class-transformer';
import { AuthProviderCreateOrConnectWithoutUserInput } from './auth-provider-create-or-connect-without-user.input';
import { AuthProviderUpsertWithWhereUniqueWithoutUserInput } from './auth-provider-upsert-with-where-unique-without-user.input';
import { AuthProviderCreateManyUserInputEnvelope } from './auth-provider-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AuthProviderWhereUniqueInput } from './auth-provider-where-unique.input';
import { AuthProviderUpdateWithWhereUniqueWithoutUserInput } from './auth-provider-update-with-where-unique-without-user.input';
import { AuthProviderUpdateManyWithWhereWithoutUserInput } from './auth-provider-update-many-with-where-without-user.input';
import { AuthProviderScalarWhereInput } from './auth-provider-scalar-where.input';

@InputType()
export class AuthProviderUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [AuthProviderCreateWithoutUserInput], {nullable:true})
    @Type(() => AuthProviderCreateWithoutUserInput)
    create?: Array<AuthProviderCreateWithoutUserInput>;

    @Field(() => [AuthProviderCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AuthProviderCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AuthProviderCreateOrConnectWithoutUserInput>;

    @Field(() => [AuthProviderUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AuthProviderUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<AuthProviderUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => AuthProviderCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AuthProviderCreateManyUserInputEnvelope)
    createMany?: AuthProviderCreateManyUserInputEnvelope;

    @Field(() => [AuthProviderWhereUniqueInput], {nullable:true})
    @Type(() => AuthProviderWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AuthProviderWhereUniqueInput, 'provider_user_id'>>;

    @Field(() => [AuthProviderWhereUniqueInput], {nullable:true})
    @Type(() => AuthProviderWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AuthProviderWhereUniqueInput, 'provider_user_id'>>;

    @Field(() => [AuthProviderWhereUniqueInput], {nullable:true})
    @Type(() => AuthProviderWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AuthProviderWhereUniqueInput, 'provider_user_id'>>;

    @Field(() => [AuthProviderWhereUniqueInput], {nullable:true})
    @Type(() => AuthProviderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AuthProviderWhereUniqueInput, 'provider_user_id'>>;

    @Field(() => [AuthProviderUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AuthProviderUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<AuthProviderUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [AuthProviderUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => AuthProviderUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<AuthProviderUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [AuthProviderScalarWhereInput], {nullable:true})
    @Type(() => AuthProviderScalarWhereInput)
    deleteMany?: Array<AuthProviderScalarWhereInput>;
}
