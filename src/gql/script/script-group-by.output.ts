import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ScriptStatus } from '../prisma/script-status.enum';
import { ScriptCountAggregate } from './script-count-aggregate.output';
import { ScriptAvgAggregate } from './script-avg-aggregate.output';
import { ScriptSumAggregate } from './script-sum-aggregate.output';
import { ScriptMinAggregate } from './script-min-aggregate.output';
import { ScriptMaxAggregate } from './script-max-aggregate.output';

@ObjectType()
export class ScriptGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    path?: string;

    @Field(() => String, {nullable:true})
    bundle?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => ScriptStatus, {nullable:true})
    status?: keyof typeof ScriptStatus;

    @Field(() => String, {nullable:true})
    failed_reason?: string;

    @Field(() => ScriptCountAggregate, {nullable:true})
    _count?: ScriptCountAggregate;

    @Field(() => ScriptAvgAggregate, {nullable:true})
    _avg?: ScriptAvgAggregate;

    @Field(() => ScriptSumAggregate, {nullable:true})
    _sum?: ScriptSumAggregate;

    @Field(() => ScriptMinAggregate, {nullable:true})
    _min?: ScriptMinAggregate;

    @Field(() => ScriptMaxAggregate, {nullable:true})
    _max?: ScriptMaxAggregate;
}
