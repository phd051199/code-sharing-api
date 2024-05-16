import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScriptWhereInput } from './script-where.input';
import { Type } from 'class-transformer';
import { ScriptOrderByWithRelationInput } from './script-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScriptCountAggregateInput } from './script-count-aggregate.input';
import { ScriptAvgAggregateInput } from './script-avg-aggregate.input';
import { ScriptSumAggregateInput } from './script-sum-aggregate.input';
import { ScriptMinAggregateInput } from './script-min-aggregate.input';
import { ScriptMaxAggregateInput } from './script-max-aggregate.input';

@ArgsType()
export class ScriptAggregateArgs {

    @Field(() => ScriptWhereInput, {nullable:true})
    @Type(() => ScriptWhereInput)
    where?: ScriptWhereInput;

    @Field(() => [ScriptOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ScriptOrderByWithRelationInput>;

    @Field(() => ScriptWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ScriptCountAggregateInput, {nullable:true})
    _count?: ScriptCountAggregateInput;

    @Field(() => ScriptAvgAggregateInput, {nullable:true})
    _avg?: ScriptAvgAggregateInput;

    @Field(() => ScriptSumAggregateInput, {nullable:true})
    _sum?: ScriptSumAggregateInput;

    @Field(() => ScriptMinAggregateInput, {nullable:true})
    _min?: ScriptMinAggregateInput;

    @Field(() => ScriptMaxAggregateInput, {nullable:true})
    _max?: ScriptMaxAggregateInput;
}
