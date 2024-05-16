import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserScriptWhereInput } from './user-script-where.input';
import { Type } from 'class-transformer';
import { UserScriptOrderByWithRelationInput } from './user-script-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserScriptWhereUniqueInput } from './user-script-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserScriptCountAggregateInput } from './user-script-count-aggregate.input';
import { UserScriptAvgAggregateInput } from './user-script-avg-aggregate.input';
import { UserScriptSumAggregateInput } from './user-script-sum-aggregate.input';
import { UserScriptMinAggregateInput } from './user-script-min-aggregate.input';
import { UserScriptMaxAggregateInput } from './user-script-max-aggregate.input';

@ArgsType()
export class UserScriptAggregateArgs {

    @Field(() => UserScriptWhereInput, {nullable:true})
    @Type(() => UserScriptWhereInput)
    where?: UserScriptWhereInput;

    @Field(() => [UserScriptOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserScriptOrderByWithRelationInput>;

    @Field(() => UserScriptWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserScriptWhereUniqueInput, 'userId_scriptId'>;

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
