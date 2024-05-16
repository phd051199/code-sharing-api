import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserScriptCountOrderByAggregateInput } from './user-script-count-order-by-aggregate.input';
import { UserScriptAvgOrderByAggregateInput } from './user-script-avg-order-by-aggregate.input';
import { UserScriptMaxOrderByAggregateInput } from './user-script-max-order-by-aggregate.input';
import { UserScriptMinOrderByAggregateInput } from './user-script-min-order-by-aggregate.input';
import { UserScriptSumOrderByAggregateInput } from './user-script-sum-order-by-aggregate.input';

@InputType()
export class UserScriptOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    scriptId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserScriptCountOrderByAggregateInput, {nullable:true})
    _count?: UserScriptCountOrderByAggregateInput;

    @Field(() => UserScriptAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserScriptAvgOrderByAggregateInput;

    @Field(() => UserScriptMaxOrderByAggregateInput, {nullable:true})
    _max?: UserScriptMaxOrderByAggregateInput;

    @Field(() => UserScriptMinOrderByAggregateInput, {nullable:true})
    _min?: UserScriptMinOrderByAggregateInput;

    @Field(() => UserScriptSumOrderByAggregateInput, {nullable:true})
    _sum?: UserScriptSumOrderByAggregateInput;
}
