import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OAuthProviderWhereUniqueInput } from './o-auth-provider-where-unique.input';
import { Type } from 'class-transformer';
import { OAuthProviderCreateWithoutUserInput } from './o-auth-provider-create-without-user.input';

@InputType()
export class OAuthProviderCreateOrConnectWithoutUserInput {

    @Field(() => OAuthProviderWhereUniqueInput, {nullable:false})
    @Type(() => OAuthProviderWhereUniqueInput)
    where!: Prisma.AtLeast<OAuthProviderWhereUniqueInput, 'provider_userId'>;

    @Field(() => OAuthProviderCreateWithoutUserInput, {nullable:false})
    @Type(() => OAuthProviderCreateWithoutUserInput)
    create!: OAuthProviderCreateWithoutUserInput;
}
