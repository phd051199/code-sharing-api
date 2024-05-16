import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserScriptCountAggregate } from './user-script-count-aggregate.output';
import { UserScriptAvgAggregate } from './user-script-avg-aggregate.output';
import { UserScriptSumAggregate } from './user-script-sum-aggregate.output';
import { UserScriptMinAggregate } from './user-script-min-aggregate.output';
import { UserScriptMaxAggregate } from './user-script-max-aggregate.output';

@ObjectType()
export class UserScriptGroupBy {

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    scriptId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => UserScriptCountAggregate, {nullable:true})
    _count?: UserScriptCountAggregate;

    @Field(() => UserScriptAvgAggregate, {nullable:true})
    _avg?: UserScriptAvgAggregate;

    @Field(() => UserScriptSumAggregate, {nullable:true})
    _sum?: UserScriptSumAggregate;

    @Field(() => UserScriptMinAggregate, {nullable:true})
    _min?: UserScriptMinAggregate;

    @Field(() => UserScriptMaxAggregate, {nullable:true})
    _max?: UserScriptMaxAggregate;
}
