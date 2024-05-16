import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumOAuthProvidersFilter } from '../prisma/enum-o-auth-providers-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class OAuthProviderScalarWhereInput {

    @Field(() => [OAuthProviderScalarWhereInput], {nullable:true})
    AND?: Array<OAuthProviderScalarWhereInput>;

    @Field(() => [OAuthProviderScalarWhereInput], {nullable:true})
    OR?: Array<OAuthProviderScalarWhereInput>;

    @Field(() => [OAuthProviderScalarWhereInput], {nullable:true})
    NOT?: Array<OAuthProviderScalarWhereInput>;

    @Field(() => EnumOAuthProvidersFilter, {nullable:true})
    provider?: EnumOAuthProvidersFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
