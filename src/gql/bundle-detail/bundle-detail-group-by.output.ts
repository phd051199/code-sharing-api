import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BuildStatus } from '../prisma/build-status.enum';
import { BundleDetailCountAggregate } from './bundle-detail-count-aggregate.output';
import { BundleDetailAvgAggregate } from './bundle-detail-avg-aggregate.output';
import { BundleDetailSumAggregate } from './bundle-detail-sum-aggregate.output';
import { BundleDetailMinAggregate } from './bundle-detail-min-aggregate.output';
import { BundleDetailMaxAggregate } from './bundle-detail-max-aggregate.output';

@ObjectType()
export class BundleDetailGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    scriptId!: number;

    @Field(() => String, {nullable:true})
    bundlePath?: string;

    @Field(() => Int, {nullable:true})
    priority?: number;

    @Field(() => BuildStatus, {nullable:true})
    status?: keyof typeof BuildStatus;

    @Field(() => String, {nullable:true})
    failedReason?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
