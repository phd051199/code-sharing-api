import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthProviderCreateWithoutUserInput } from './o-auth-provider-create-without-user.input';
import { Type } from 'class-transformer';
import { OAuthProviderCreateOrConnectWithoutUserInput } from './o-auth-provider-create-or-connect-without-user.input';
import { OAuthProviderCreateManyUserInputEnvelope } from './o-auth-provider-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OAuthProviderWhereUniqueInput } from './o-auth-provider-where-unique.input';

@InputType()
export class OAuthProviderUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [OAuthProviderCreateWithoutUserInput], {nullable:true})
    @Type(() => OAuthProviderCreateWithoutUserInput)
    create?: Array<OAuthProviderCreateWithoutUserInput>;

    @Field(() => [OAuthProviderCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => OAuthProviderCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<OAuthProviderCreateOrConnectWithoutUserInput>;

    @Field(() => OAuthProviderCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => OAuthProviderCreateManyUserInputEnvelope)
    createMany?: OAuthProviderCreateManyUserInputEnvelope;

    @Field(() => [OAuthProviderWhereUniqueInput], {nullable:true})
    @Type(() => OAuthProviderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OAuthProviderWhereUniqueInput, 'provider_userId'>>;
}
