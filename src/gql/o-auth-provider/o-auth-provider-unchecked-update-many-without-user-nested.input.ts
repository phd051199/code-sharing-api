import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthProviderCreateWithoutUserInput } from './o-auth-provider-create-without-user.input';
import { Type } from 'class-transformer';
import { OAuthProviderCreateOrConnectWithoutUserInput } from './o-auth-provider-create-or-connect-without-user.input';
import { OAuthProviderUpsertWithWhereUniqueWithoutUserInput } from './o-auth-provider-upsert-with-where-unique-without-user.input';
import { OAuthProviderCreateManyUserInputEnvelope } from './o-auth-provider-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OAuthProviderWhereUniqueInput } from './o-auth-provider-where-unique.input';
import { OAuthProviderUpdateWithWhereUniqueWithoutUserInput } from './o-auth-provider-update-with-where-unique-without-user.input';
import { OAuthProviderUpdateManyWithWhereWithoutUserInput } from './o-auth-provider-update-many-with-where-without-user.input';
import { OAuthProviderScalarWhereInput } from './o-auth-provider-scalar-where.input';

@InputType()
export class OAuthProviderUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [OAuthProviderCreateWithoutUserInput], {nullable:true})
    @Type(() => OAuthProviderCreateWithoutUserInput)
    create?: Array<OAuthProviderCreateWithoutUserInput>;

    @Field(() => [OAuthProviderCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => OAuthProviderCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<OAuthProviderCreateOrConnectWithoutUserInput>;

    @Field(() => [OAuthProviderUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => OAuthProviderUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<OAuthProviderUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => OAuthProviderCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => OAuthProviderCreateManyUserInputEnvelope)
    createMany?: OAuthProviderCreateManyUserInputEnvelope;

    @Field(() => [OAuthProviderWhereUniqueInput], {nullable:true})
    @Type(() => OAuthProviderWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OAuthProviderWhereUniqueInput, 'provider_userId'>>;

    @Field(() => [OAuthProviderWhereUniqueInput], {nullable:true})
    @Type(() => OAuthProviderWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OAuthProviderWhereUniqueInput, 'provider_userId'>>;

    @Field(() => [OAuthProviderWhereUniqueInput], {nullable:true})
    @Type(() => OAuthProviderWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OAuthProviderWhereUniqueInput, 'provider_userId'>>;

    @Field(() => [OAuthProviderWhereUniqueInput], {nullable:true})
    @Type(() => OAuthProviderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OAuthProviderWhereUniqueInput, 'provider_userId'>>;

    @Field(() => [OAuthProviderUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => OAuthProviderUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<OAuthProviderUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [OAuthProviderUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => OAuthProviderUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<OAuthProviderUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [OAuthProviderScalarWhereInput], {nullable:true})
    @Type(() => OAuthProviderScalarWhereInput)
    deleteMany?: Array<OAuthProviderScalarWhereInput>;
}
