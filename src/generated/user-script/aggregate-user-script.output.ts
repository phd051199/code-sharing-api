import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserScriptCountAggregate } from './user-script-count-aggregate.output';
import { UserScriptAvgAggregate } from './user-script-avg-aggregate.output';
import { UserScriptSumAggregate } from './user-script-sum-aggregate.output';
import { UserScriptMinAggregate } from './user-script-min-aggregate.output';
import { UserScriptMaxAggregate } from './user-script-max-aggregate.output';

@ObjectType()
export class AggregateUserScript {

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
