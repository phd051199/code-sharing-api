import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumOAuthProvidersWithAggregatesFilter } from '../prisma/enum-o-auth-providers-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class OAuthProviderScalarWhereWithAggregatesInput {

    @Field(() => [OAuthProviderScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OAuthProviderScalarWhereWithAggregatesInput>;

    @Field(() => [OAuthProviderScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OAuthProviderScalarWhereWithAggregatesInput>;

    @Field(() => [OAuthProviderScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OAuthProviderScalarWhereWithAggregatesInput>;

    @Field(() => EnumOAuthProvidersWithAggregatesFilter, {nullable:true})
    provider?: EnumOAuthProvidersWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
