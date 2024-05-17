import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AuthProviderCountOrderByAggregateInput } from './auth-provider-count-order-by-aggregate.input';
import { AuthProviderAvgOrderByAggregateInput } from './auth-provider-avg-order-by-aggregate.input';
import { AuthProviderMaxOrderByAggregateInput } from './auth-provider-max-order-by-aggregate.input';
import { AuthProviderMinOrderByAggregateInput } from './auth-provider-min-order-by-aggregate.input';
import { AuthProviderSumOrderByAggregateInput } from './auth-provider-sum-order-by-aggregate.input';

@InputType()
export class AuthProviderOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => AuthProviderCountOrderByAggregateInput, {nullable:true})
    _count?: AuthProviderCountOrderByAggregateInput;

    @Field(() => AuthProviderAvgOrderByAggregateInput, {nullable:true})
    _avg?: AuthProviderAvgOrderByAggregateInput;

    @Field(() => AuthProviderMaxOrderByAggregateInput, {nullable:true})
    _max?: AuthProviderMaxOrderByAggregateInput;

    @Field(() => AuthProviderMinOrderByAggregateInput, {nullable:true})
    _min?: AuthProviderMinOrderByAggregateInput;

    @Field(() => AuthProviderSumOrderByAggregateInput, {nullable:true})
    _sum?: AuthProviderSumOrderByAggregateInput;
}
