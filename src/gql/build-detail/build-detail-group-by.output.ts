import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BuildStatus } from '../prisma/build-status.enum';
import { BuildDetailCountAggregate } from './build-detail-count-aggregate.output';
import { BuildDetailAvgAggregate } from './build-detail-avg-aggregate.output';
import { BuildDetailSumAggregate } from './build-detail-sum-aggregate.output';
import { BuildDetailMinAggregate } from './build-detail-min-aggregate.output';
import { BuildDetailMaxAggregate } from './build-detail-max-aggregate.output';

@ObjectType()
export class BuildDetailGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    script_id!: number;

    @Field(() => String, {nullable:true})
    path?: string;

    @Field(() => String, {nullable:true})
    bundle?: string;

    @Field(() => Int, {nullable:true})
    priority?: number;

    @Field(() => BuildStatus, {nullable:true})
    status?: keyof typeof BuildStatus;

    @Field(() => String, {nullable:true})
    failed_reason?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => BuildDetailCountAggregate, {nullable:true})
    _count?: BuildDetailCountAggregate;

    @Field(() => BuildDetailAvgAggregate, {nullable:true})
    _avg?: BuildDetailAvgAggregate;

    @Field(() => BuildDetailSumAggregate, {nullable:true})
    _sum?: BuildDetailSumAggregate;

    @Field(() => BuildDetailMinAggregate, {nullable:true})
    _min?: BuildDetailMinAggregate;

    @Field(() => BuildDetailMaxAggregate, {nullable:true})
    _max?: BuildDetailMaxAggregate;
}
