import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BuildStatus } from '../prisma/build-status.enum';
import { ScriptCreateNestedOneWithoutBuild_detailInput } from '../script/script-create-nested-one-without-build-detail.input';

@InputType()
export class BuildDetailCreateInput {

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

    @Field(() => ScriptCreateNestedOneWithoutBuild_detailInput, {nullable:false})
    script!: ScriptCreateNestedOneWithoutBuild_detailInput;
}
