import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserScriptWhereInput } from './user-script-where.input';
import { Type } from 'class-transformer';
import { UserScriptOrderByWithAggregationInput } from './user-script-order-by-with-aggregation.input';
import { UserScriptScalarFieldEnum } from './user-script-scalar-field.enum';
import { UserScriptScalarWhereWithAggregatesInput } from './user-script-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserScriptCountAggregateInput } from './user-script-count-aggregate.input';
import { UserScriptAvgAggregateInput } from './user-script-avg-aggregate.input';
import { UserScriptSumAggregateInput } from './user-script-sum-aggregate.input';
import { UserScriptMinAggregateInput } from './user-script-min-aggregate.input';
import { UserScriptMaxAggregateInput } from './user-script-max-aggregate.input';

@ArgsType()
export class UserScriptGroupByArgs {

    @Field(() => UserScriptWhereInput, {nullable:true})
    @Type(() => UserScriptWhereInput)
    where?: UserScriptWhereInput;

    @Field(() => [UserScriptOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserScriptOrderByWithAggregationInput>;

    @Field(() => [UserScriptScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScriptScalarFieldEnum>;

    @Field(() => UserScriptScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserScriptScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserScriptCountAggregateInput, {nullable:true})
    _count?: UserScriptCountAggregateInput;

    @Field(() => UserScriptAvgAggregateInput, {nullable:true})
    _avg?: UserScriptAvgAggregateInput;

    @Field(() => UserScriptSumAggregateInput, {nullable:true})
    _sum?: UserScriptSumAggregateInput;

    @Field(() => UserScriptMinAggregateInput, {nullable:true})
    _min?: UserScriptMinAggregateInput;

    @Field(() => UserScriptMaxAggregateInput, {nullable:true})
    _max?: UserScriptMaxAggregateInput;
}
