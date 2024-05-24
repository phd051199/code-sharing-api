import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BuildStatus } from '../prisma/build-status.enum';

@InputType()
export class BuildDetailUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
