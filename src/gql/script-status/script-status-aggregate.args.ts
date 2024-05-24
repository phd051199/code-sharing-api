import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScriptStatusWhereInput } from './script-status-where.input';
import { Type } from 'class-transformer';
import { ScriptStatusOrderByWithRelationInput } from './script-status-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ScriptStatusWhereUniqueInput } from './script-status-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScriptStatusCountAggregateInput } from './script-status-count-aggregate.input';
import { ScriptStatusAvgAggregateInput } from './script-status-avg-aggregate.input';
import { ScriptStatusSumAggregateInput } from './script-status-sum-aggregate.input';
import { ScriptStatusMinAggregateInput } from './script-status-min-aggregate.input';
import { ScriptStatusMaxAggregateInput } from './script-status-max-aggregate.input';

@ArgsType()
export class ScriptStatusAggregateArgs {

    @Field(() => ScriptStatusWhereInput, {nullable:true})
    @Type(() => ScriptStatusWhereInput)
    where?: ScriptStatusWhereInput;

    @Field(() => [ScriptStatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ScriptStatusOrderByWithRelationInput>;

    @Field(() => ScriptStatusWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ScriptStatusWhereUniqueInput, 'id' | 'script_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ScriptStatusCountAggregateInput, {nullable:true})
    _count?: ScriptStatusCountAggregateInput;

    @Field(() => ScriptStatusAvgAggregateInput, {nullable:true})
    _avg?: ScriptStatusAvgAggregateInput;

    @Field(() => ScriptStatusSumAggregateInput, {nullable:true})
    _sum?: ScriptStatusSumAggregateInput;

    @Field(() => ScriptStatusMinAggregateInput, {nullable:true})
    _min?: ScriptStatusMinAggregateInput;

    @Field(() => ScriptStatusMaxAggregateInput, {nullable:true})
    _max?: ScriptStatusMaxAggregateInput;
}
