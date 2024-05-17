import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PermissionCountOrderByAggregateInput } from './permission-count-order-by-aggregate.input';
import { PermissionAvgOrderByAggregateInput } from './permission-avg-order-by-aggregate.input';
import { PermissionMaxOrderByAggregateInput } from './permission-max-order-by-aggregate.input';
import { PermissionMinOrderByAggregateInput } from './permission-min-order-by-aggregate.input';
import { PermissionSumOrderByAggregateInput } from './permission-sum-order-by-aggregate.input';

@InputType()
export class PermissionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    action?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subject?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    inverted?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    conditions?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    reason?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => PermissionCountOrderByAggregateInput, {nullable:true})
    _count?: PermissionCountOrderByAggregateInput;

    @Field(() => PermissionAvgOrderByAggregateInput, {nullable:true})
    _avg?: PermissionAvgOrderByAggregateInput;

    @Field(() => PermissionMaxOrderByAggregateInput, {nullable:true})
    _max?: PermissionMaxOrderByAggregateInput;

    @Field(() => PermissionMinOrderByAggregateInput, {nullable:true})
    _min?: PermissionMinOrderByAggregateInput;

    @Field(() => PermissionSumOrderByAggregateInput, {nullable:true})
    _sum?: PermissionSumOrderByAggregateInput;
}
