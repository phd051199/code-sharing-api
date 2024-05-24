import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BundleDetailCountOrderByAggregateInput } from './bundle-detail-count-order-by-aggregate.input';
import { BundleDetailAvgOrderByAggregateInput } from './bundle-detail-avg-order-by-aggregate.input';
import { BundleDetailMaxOrderByAggregateInput } from './bundle-detail-max-order-by-aggregate.input';
import { BundleDetailMinOrderByAggregateInput } from './bundle-detail-min-order-by-aggregate.input';
import { BundleDetailSumOrderByAggregateInput } from './bundle-detail-sum-order-by-aggregate.input';

@InputType()
export class BundleDetailOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    scriptId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    bundlePath?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    priority?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    failedReason?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => BundleDetailCountOrderByAggregateInput, {nullable:true})
    _count?: BundleDetailCountOrderByAggregateInput;

    @Field(() => BundleDetailAvgOrderByAggregateInput, {nullable:true})
    _avg?: BundleDetailAvgOrderByAggregateInput;

    @Field(() => BundleDetailMaxOrderByAggregateInput, {nullable:true})
    _max?: BundleDetailMaxOrderByAggregateInput;

    @Field(() => BundleDetailMinOrderByAggregateInput, {nullable:true})
    _min?: BundleDetailMinOrderByAggregateInput;

    @Field(() => BundleDetailSumOrderByAggregateInput, {nullable:true})
    _sum?: BundleDetailSumOrderByAggregateInput;
}
