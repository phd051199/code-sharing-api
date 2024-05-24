import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuildDetailWhereInput } from './build-detail-where.input';
import { Type } from 'class-transformer';
import { BuildDetailOrderByWithRelationInput } from './build-detail-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BuildDetailWhereUniqueInput } from './build-detail-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BuildDetailCountAggregateInput } from './build-detail-count-aggregate.input';
import { BuildDetailAvgAggregateInput } from './build-detail-avg-aggregate.input';
import { BuildDetailSumAggregateInput } from './build-detail-sum-aggregate.input';
import { BuildDetailMinAggregateInput } from './build-detail-min-aggregate.input';
import { BuildDetailMaxAggregateInput } from './build-detail-max-aggregate.input';

@ArgsType()
export class BuildDetailAggregateArgs {

    @Field(() => BuildDetailWhereInput, {nullable:true})
    @Type(() => BuildDetailWhereInput)
    where?: BuildDetailWhereInput;

    @Field(() => [BuildDetailOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BuildDetailOrderByWithRelationInput>;

    @Field(() => BuildDetailWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BuildDetailWhereUniqueInput, 'id' | 'script_id'>;

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
