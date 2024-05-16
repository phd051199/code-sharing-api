import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OAuthProviderWhereUniqueInput } from './o-auth-provider-where-unique.input';
import { Type } from 'class-transformer';
import { OAuthProviderCreateInput } from './o-auth-provider-create.input';
import { OAuthProviderUpdateInput } from './o-auth-provider-update.input';

@ArgsType()
export class UpsertOneOAuthProviderArgs {

    @Field(() => OAuthProviderWhereUniqueInput, {nullable:false})
    @Type(() => OAuthProviderWhereUniqueInput)
    where!: Prisma.AtLeast<OAuthProviderWhereUniqueInput, 'provider_userId'>;

    @Field(() => OAuthProviderCreateInput, {nullable:false})
    @Type(() => OAuthProviderCreateInput)
    create!: OAuthProviderCreateInput;

    @Field(() => OAuthProviderUpdateInput, {nullable:false})
    @Type(() => OAuthProviderUpdateInput)
    update!: OAuthProviderUpdateInput;
}
