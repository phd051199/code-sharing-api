import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OAuthProviderCountOrderByAggregateInput } from './o-auth-provider-count-order-by-aggregate.input';
import { OAuthProviderAvgOrderByAggregateInput } from './o-auth-provider-avg-order-by-aggregate.input';
import { OAuthProviderMaxOrderByAggregateInput } from './o-auth-provider-max-order-by-aggregate.input';
import { OAuthProviderMinOrderByAggregateInput } from './o-auth-provider-min-order-by-aggregate.input';
import { OAuthProviderSumOrderByAggregateInput } from './o-auth-provider-sum-order-by-aggregate.input';

@InputType()
export class OAuthProviderOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => OAuthProviderCountOrderByAggregateInput, {nullable:true})
    _count?: OAuthProviderCountOrderByAggregateInput;

    @Field(() => OAuthProviderAvgOrderByAggregateInput, {nullable:true})
    _avg?: OAuthProviderAvgOrderByAggregateInput;

    @Field(() => OAuthProviderMaxOrderByAggregateInput, {nullable:true})
    _max?: OAuthProviderMaxOrderByAggregateInput;

    @Field(() => OAuthProviderMinOrderByAggregateInput, {nullable:true})
    _min?: OAuthProviderMinOrderByAggregateInput;

    @Field(() => OAuthProviderSumOrderByAggregateInput, {nullable:true})
    _sum?: OAuthProviderSumOrderByAggregateInput;
}
