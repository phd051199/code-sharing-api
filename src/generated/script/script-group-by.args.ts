import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScriptWhereInput } from './script-where.input';
import { Type } from 'class-transformer';
import { ScriptOrderByWithAggregationInput } from './script-order-by-with-aggregation.input';
import { ScriptScalarFieldEnum } from './script-scalar-field.enum';
import { ScriptScalarWhereWithAggregatesInput } from './script-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ScriptCountAggregateInput } from './script-count-aggregate.input';
import { ScriptAvgAggregateInput } from './script-avg-aggregate.input';
import { ScriptSumAggregateInput } from './script-sum-aggregate.input';
import { ScriptMinAggregateInput } from './script-min-aggregate.input';
import { ScriptMaxAggregateInput } from './script-max-aggregate.input';

@ArgsType()
export class ScriptGroupByArgs {

    @Field(() => ScriptWhereInput, {nullable:true})
    @Type(() => ScriptWhereInput)
    where?: ScriptWhereInput;

    @Field(() => [ScriptOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ScriptOrderByWithAggregationInput>;

    @Field(() => [ScriptScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ScriptScalarFieldEnum>;

    @Field(() => ScriptScalarWhereWithAggregatesInput, {nullable:true})
    having?: ScriptScalarWhereWithAggregatesInput;

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
