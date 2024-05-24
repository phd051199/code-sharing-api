import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BuildDetailCountAggregate } from './build-detail-count-aggregate.output';
import { BuildDetailAvgAggregate } from './build-detail-avg-aggregate.output';
import { BuildDetailSumAggregate } from './build-detail-sum-aggregate.output';
import { BuildDetailMinAggregate } from './build-detail-min-aggregate.output';
import { BuildDetailMaxAggregate } from './build-detail-max-aggregate.output';

@ObjectType()
export class AggregateBuildDetail {

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
