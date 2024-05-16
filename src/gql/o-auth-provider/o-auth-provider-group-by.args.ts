import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthProviderWhereInput } from './o-auth-provider-where.input';
import { Type } from 'class-transformer';
import { OAuthProviderOrderByWithAggregationInput } from './o-auth-provider-order-by-with-aggregation.input';
import { OAuthProviderScalarFieldEnum } from './o-auth-provider-scalar-field.enum';
import { OAuthProviderScalarWhereWithAggregatesInput } from './o-auth-provider-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { OAuthProviderCountAggregateInput } from './o-auth-provider-count-aggregate.input';
import { OAuthProviderAvgAggregateInput } from './o-auth-provider-avg-aggregate.input';
import { OAuthProviderSumAggregateInput } from './o-auth-provider-sum-aggregate.input';
import { OAuthProviderMinAggregateInput } from './o-auth-provider-min-aggregate.input';
import { OAuthProviderMaxAggregateInput } from './o-auth-provider-max-aggregate.input';

@ArgsType()
export class OAuthProviderGroupByArgs {

    @Field(() => OAuthProviderWhereInput, {nullable:true})
    @Type(() => OAuthProviderWhereInput)
    where?: OAuthProviderWhereInput;

    @Field(() => [OAuthProviderOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OAuthProviderOrderByWithAggregationInput>;

    @Field(() => [OAuthProviderScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OAuthProviderScalarFieldEnum>;

    @Field(() => OAuthProviderScalarWhereWithAggregatesInput, {nullable:true})
    having?: OAuthProviderScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OAuthProviderCountAggregateInput, {nullable:true})
    _count?: OAuthProviderCountAggregateInput;

    @Field(() => OAuthProviderAvgAggregateInput, {nullable:true})
    _avg?: OAuthProviderAvgAggregateInput;

    @Field(() => OAuthProviderSumAggregateInput, {nullable:true})
    _sum?: OAuthProviderSumAggregateInput;

    @Field(() => OAuthProviderMinAggregateInput, {nullable:true})
    _min?: OAuthProviderMinAggregateInput;

    @Field(() => OAuthProviderMaxAggregateInput, {nullable:true})
    _max?: OAuthProviderMaxAggregateInput;
}
