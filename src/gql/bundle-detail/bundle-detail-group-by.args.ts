import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BundleDetailWhereInput } from './bundle-detail-where.input';
import { Type } from 'class-transformer';
import { BundleDetailOrderByWithAggregationInput } from './bundle-detail-order-by-with-aggregation.input';
import { BundleDetailScalarFieldEnum } from './bundle-detail-scalar-field.enum';
import { BundleDetailScalarWhereWithAggregatesInput } from './bundle-detail-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BundleDetailCountAggregateInput } from './bundle-detail-count-aggregate.input';
import { BundleDetailAvgAggregateInput } from './bundle-detail-avg-aggregate.input';
import { BundleDetailSumAggregateInput } from './bundle-detail-sum-aggregate.input';
import { BundleDetailMinAggregateInput } from './bundle-detail-min-aggregate.input';
import { BundleDetailMaxAggregateInput } from './bundle-detail-max-aggregate.input';

@ArgsType()
export class BundleDetailGroupByArgs {

    @Field(() => BundleDetailWhereInput, {nullable:true})
    @Type(() => BundleDetailWhereInput)
    where?: BundleDetailWhereInput;

    @Field(() => [BundleDetailOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BundleDetailOrderByWithAggregationInput>;

    @Field(() => [BundleDetailScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BundleDetailScalarFieldEnum>;

    @Field(() => BundleDetailScalarWhereWithAggregatesInput, {nullable:true})
    having?: BundleDetailScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BundleDetailCountAggregateInput, {nullable:true})
    _count?: BundleDetailCountAggregateInput;

    @Field(() => BundleDetailAvgAggregateInput, {nullable:true})
    _avg?: BundleDetailAvgAggregateInput;

    @Field(() => BundleDetailSumAggregateInput, {nullable:true})
    _sum?: BundleDetailSumAggregateInput;

    @Field(() => BundleDetailMinAggregateInput, {nullable:true})
    _min?: BundleDetailMinAggregateInput;

    @Field(() => BundleDetailMaxAggregateInput, {nullable:true})
    _max?: BundleDetailMaxAggregateInput;
}
