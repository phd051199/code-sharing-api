import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ScriptStatusCountOrderByAggregateInput } from './script-status-count-order-by-aggregate.input';
import { ScriptStatusAvgOrderByAggregateInput } from './script-status-avg-order-by-aggregate.input';
import { ScriptStatusMaxOrderByAggregateInput } from './script-status-max-order-by-aggregate.input';
import { ScriptStatusMinOrderByAggregateInput } from './script-status-min-order-by-aggregate.input';
import { ScriptStatusSumOrderByAggregateInput } from './script-status-sum-order-by-aggregate.input';

@InputType()
export class ScriptStatusOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    script_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    path?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    bundle?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    priority?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    failed_reason?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => ScriptStatusCountOrderByAggregateInput, {nullable:true})
    _count?: ScriptStatusCountOrderByAggregateInput;

    @Field(() => ScriptStatusAvgOrderByAggregateInput, {nullable:true})
    _avg?: ScriptStatusAvgOrderByAggregateInput;

    @Field(() => ScriptStatusMaxOrderByAggregateInput, {nullable:true})
    _max?: ScriptStatusMaxOrderByAggregateInput;

    @Field(() => ScriptStatusMinOrderByAggregateInput, {nullable:true})
    _min?: ScriptStatusMinOrderByAggregateInput;

    @Field(() => ScriptStatusSumOrderByAggregateInput, {nullable:true})
    _sum?: ScriptStatusSumOrderByAggregateInput;
}
