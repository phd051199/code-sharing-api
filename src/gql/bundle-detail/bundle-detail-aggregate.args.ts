import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BundleDetailWhereInput } from './bundle-detail-where.input';
import { Type } from 'class-transformer';
import { BundleDetailOrderByWithRelationInput } from './bundle-detail-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BundleDetailWhereUniqueInput } from './bundle-detail-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BundleDetailCountAggregateInput } from './bundle-detail-count-aggregate.input';
import { BundleDetailAvgAggregateInput } from './bundle-detail-avg-aggregate.input';
import { BundleDetailSumAggregateInput } from './bundle-detail-sum-aggregate.input';
import { BundleDetailMinAggregateInput } from './bundle-detail-min-aggregate.input';
import { BundleDetailMaxAggregateInput } from './bundle-detail-max-aggregate.input';

@ArgsType()
export class BundleDetailAggregateArgs {

    @Field(() => BundleDetailWhereInput, {nullable:true})
    @Type(() => BundleDetailWhereInput)
    where?: BundleDetailWhereInput;

    @Field(() => [BundleDetailOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BundleDetailOrderByWithRelationInput>;

    @Field(() => BundleDetailWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BundleDetailWhereUniqueInput, 'id' | 'scriptId'>;

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
