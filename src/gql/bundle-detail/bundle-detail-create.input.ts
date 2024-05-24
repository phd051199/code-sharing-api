import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BuildStatus } from '../prisma/build-status.enum';
import { ScriptCreateNestedOneWithoutBundleDetailInput } from '../script/script-create-nested-one-without-bundle-detail.input';

@InputType()
export class BundleDetailCreateInput {

    @Field(() => String, {nullable:true})
    bundlePath?: string;

    @Field(() => Int, {nullable:true})
    priority?: number;

    @Field(() => BuildStatus, {nullable:true})
    status?: keyof typeof BuildStatus;

    @Field(() => String, {nullable:true})
    failedReason?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ScriptCreateNestedOneWithoutBundleDetailInput, {nullable:false})
    script!: ScriptCreateNestedOneWithoutBundleDetailInput;
}
