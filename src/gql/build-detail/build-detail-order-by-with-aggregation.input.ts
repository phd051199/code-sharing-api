import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BuildDetailCountOrderByAggregateInput } from './build-detail-count-order-by-aggregate.input';
import { BuildDetailAvgOrderByAggregateInput } from './build-detail-avg-order-by-aggregate.input';
import { BuildDetailMaxOrderByAggregateInput } from './build-detail-max-order-by-aggregate.input';
import { BuildDetailMinOrderByAggregateInput } from './build-detail-min-order-by-aggregate.input';
import { BuildDetailSumOrderByAggregateInput } from './build-detail-sum-order-by-aggregate.input';

@InputType()
export class BuildDetailOrderByWithAggregationInput {

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

    @Field(() => BuildDetailCountOrderByAggregateInput, {nullable:true})
    _count?: BuildDetailCountOrderByAggregateInput;

    @Field(() => BuildDetailAvgOrderByAggregateInput, {nullable:true})
    _avg?: BuildDetailAvgOrderByAggregateInput;

    @Field(() => BuildDetailMaxOrderByAggregateInput, {nullable:true})
    _max?: BuildDetailMaxOrderByAggregateInput;

    @Field(() => BuildDetailMinOrderByAggregateInput, {nullable:true})
    _min?: BuildDetailMinOrderByAggregateInput;

    @Field(() => BuildDetailSumOrderByAggregateInput, {nullable:true})
    _sum?: BuildDetailSumOrderByAggregateInput;
}
