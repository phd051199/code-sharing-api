import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BuildStatus } from '../prisma/build-status.enum';
import { Script } from '../script/script.model';

@ObjectType()
export class ScriptStatus {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    script_id!: number;

    @Field(() => String, {nullable:true})
    path!: string | null;

    @Field(() => String, {nullable:true})
    bundle!: string | null;

    @Field(() => Int, {nullable:true})
    priority!: number | null;

    @Field(() => BuildStatus, {nullable:true})
    status!: keyof typeof BuildStatus | null;

    @Field(() => String, {nullable:true})
    failed_reason!: string | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Script, {nullable:false})
    script?: Script;
}
