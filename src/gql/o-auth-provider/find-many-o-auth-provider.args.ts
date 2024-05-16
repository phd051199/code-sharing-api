import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthProviderWhereInput } from './o-auth-provider-where.input';
import { Type } from 'class-transformer';
import { OAuthProviderOrderByWithRelationInput } from './o-auth-provider-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { OAuthProviderWhereUniqueInput } from './o-auth-provider-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OAuthProviderScalarFieldEnum } from './o-auth-provider-scalar-field.enum';

@ArgsType()
export class FindManyOAuthProviderArgs {

    @Field(() => OAuthProviderWhereInput, {nullable:true})
    @Type(() => OAuthProviderWhereInput)
    where?: OAuthProviderWhereInput;

    @Field(() => [OAuthProviderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OAuthProviderOrderByWithRelationInput>;

    @Field(() => OAuthProviderWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OAuthProviderWhereUniqueInput, 'provider_userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OAuthProviderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OAuthProviderScalarFieldEnum>;
}
