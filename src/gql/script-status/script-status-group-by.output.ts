import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BuildStatus } from '../prisma/build-status.enum';
import { ScriptStatusCountAggregate } from './script-status-count-aggregate.output';
import { ScriptStatusAvgAggregate } from './script-status-avg-aggregate.output';
import { ScriptStatusSumAggregate } from './script-status-sum-aggregate.output';
import { ScriptStatusMinAggregate } from './script-status-min-aggregate.output';
import { ScriptStatusMaxAggregate } from './script-status-max-aggregate.output';

@ObjectType()
export class ScriptStatusGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    script_id!: number;

    @Field(() => String, {nullable:true})
    path?: string;

    @Field(() => String, {nullable:true})
    bundle?: string;

    @Field(() => Int, {nullable:true})
    priority?: number;

    @Field(() => BuildStatus, {nullable:true})
    status?: keyof typeof BuildStatus;

    @Field(() => String, {nullable:true})
    failed_reason?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

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
