import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuildDetailWhereInput } from './build-detail-where.input';
import { Type } from 'class-transformer';
import { BuildDetailOrderByWithAggregationInput } from './build-detail-order-by-with-aggregation.input';
import { BuildDetailScalarFieldEnum } from './build-detail-scalar-field.enum';
import { BuildDetailScalarWhereWithAggregatesInput } from './build-detail-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BuildDetailCountAggregateInput } from './build-detail-count-aggregate.input';
import { BuildDetailAvgAggregateInput } from './build-detail-avg-aggregate.input';
import { BuildDetailSumAggregateInput } from './build-detail-sum-aggregate.input';
import { BuildDetailMinAggregateInput } from './build-detail-min-aggregate.input';
import { BuildDetailMaxAggregateInput } from './build-detail-max-aggregate.input';

@ArgsType()
export class BuildDetailGroupByArgs {

    @Field(() => BuildDetailWhereInput, {nullable:true})
    @Type(() => BuildDetailWhereInput)
    where?: BuildDetailWhereInput;

    @Field(() => [BuildDetailOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BuildDetailOrderByWithAggregationInput>;

    @Field(() => [BuildDetailScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BuildDetailScalarFieldEnum>;

    @Field(() => BuildDetailScalarWhereWithAggregatesInput, {nullable:true})
    having?: BuildDetailScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BuildDetailCountAggregateInput, {nullable:true})
    _count?: BuildDetailCountAggregateInput;

    @Field(() => BuildDetailAvgAggregateInput, {nullable:true})
    _avg?: BuildDetailAvgAggregateInput;

    @Field(() => BuildDetailSumAggregateInput, {nullable:true})
    _sum?: BuildDetailSumAggregateInput;

    @Field(() => BuildDetailMinAggregateInput, {nullable:true})
    _min?: BuildDetailMinAggregateInput;

    @Field(() => BuildDetailMaxAggregateInput, {nullable:true})
    _max?: BuildDetailMaxAggregateInput;
}
