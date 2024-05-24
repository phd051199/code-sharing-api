import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ScriptStatusCountAggregate } from './script-status-count-aggregate.output';
import { ScriptStatusAvgAggregate } from './script-status-avg-aggregate.output';
import { ScriptStatusSumAggregate } from './script-status-sum-aggregate.output';
import { ScriptStatusMinAggregate } from './script-status-min-aggregate.output';
import { ScriptStatusMaxAggregate } from './script-status-max-aggregate.output';

@ObjectType()
export class AggregateScriptStatus {

    @Field(() => ScriptStatusCountAggregate, {nullable:true})
    _count?: ScriptStatusCountAggregate;

    @Field(() => ScriptStatusAvgAggregate, {nullable:true})
    _avg?: ScriptStatusAvgAggregate;

    @Field(() => ScriptStatusSumAggregate, {nullable:true})
    _sum?: ScriptStatusSumAggregate;

    @Field(() => ScriptStatusMinAggregate, {nullable:true})
    _min?: ScriptStatusMinAggregate;

    @Field(() => ScriptStatusMaxAggregate, {nullable:true})
    _max?: ScriptStatusMaxAggregate;
}
