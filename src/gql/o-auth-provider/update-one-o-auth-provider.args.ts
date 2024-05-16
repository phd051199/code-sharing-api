import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthProviderUpdateInput } from './o-auth-provider-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OAuthProviderWhereUniqueInput } from './o-auth-provider-where-unique.input';

@ArgsType()
export class UpdateOneOAuthProviderArgs {

    @Field(() => OAuthProviderUpdateInput, {nullable:false})
    @Type(() => OAuthProviderUpdateInput)
    data!: OAuthProviderUpdateInput;

    @Field(() => OAuthProviderWhereUniqueInput, {nullable:false})
    @Type(() => OAuthProviderWhereUniqueInput)
    where!: Prisma.AtLeast<OAuthProviderWhereUniqueInput, 'provider_userId'>;
}
