import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumAuthProvidersWithAggregatesFilter } from '../prisma/enum-auth-providers-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AuthProviderScalarWhereWithAggregatesInput {

    @Field(() => [AuthProviderScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AuthProviderScalarWhereWithAggregatesInput>;

    @Field(() => [AuthProviderScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AuthProviderScalarWhereWithAggregatesInput>;

    @Field(() => [AuthProviderScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AuthProviderScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => EnumAuthProvidersWithAggregatesFilter, {nullable:true})
    provider?: EnumAuthProvidersWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
