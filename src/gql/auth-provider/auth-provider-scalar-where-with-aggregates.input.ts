import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumAuthProvidersWithAggregatesFilter } from '../prisma/enum-auth-providers-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AuthProviderScalarWhereWithAggregatesInput {

    @Field(() => [AuthProviderScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AuthProviderScalarWhereWithAggregatesInput>;

    @Field(() => [AuthProviderScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AuthProviderScalarWhereWithAggregatesInput>;

    @Field(() => [AuthProviderScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AuthProviderScalarWhereWithAggregatesInput>;

    @Field(() => EnumAuthProvidersWithAggregatesFilter, {nullable:true})
    provider?: EnumAuthProvidersWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    user_id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
