import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BundleDetailCountAggregate } from './bundle-detail-count-aggregate.output';
import { BundleDetailAvgAggregate } from './bundle-detail-avg-aggregate.output';
import { BundleDetailSumAggregate } from './bundle-detail-sum-aggregate.output';
import { BundleDetailMinAggregate } from './bundle-detail-min-aggregate.output';
import { BundleDetailMaxAggregate } from './bundle-detail-max-aggregate.output';

@ObjectType()
export class AggregateBundleDetail {

    @Field(() => BundleDetailCountAggregate, {nullable:true})
    _count?: BundleDetailCountAggregate;

    @Field(() => BundleDetailAvgAggregate, {nullable:true})
    _avg?: BundleDetailAvgAggregate;

    @Field(() => BundleDetailSumAggregate, {nullable:true})
    _sum?: BundleDetailSumAggregate;

    @Field(() => BundleDetailMinAggregate, {nullable:true})
    _min?: BundleDetailMinAggregate;

    @Field(() => BundleDetailMaxAggregate, {nullable:true})
    _max?: BundleDetailMaxAggregate;
}
