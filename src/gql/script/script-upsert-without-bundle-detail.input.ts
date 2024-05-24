import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptUpdateWithoutBundleDetailInput } from './script-update-without-bundle-detail.input';
import { Type } from 'class-transformer';
import { ScriptCreateWithoutBundleDetailInput } from './script-create-without-bundle-detail.input';
import { ScriptWhereInput } from './script-where.input';

@InputType()
export class ScriptUpsertWithoutBundleDetailInput {

    @Field(() => ScriptUpdateWithoutBundleDetailInput, {nullable:false})
    @Type(() => ScriptUpdateWithoutBundleDetailInput)
    update!: ScriptUpdateWithoutBundleDetailInput;

    @Field(() => ScriptCreateWithoutBundleDetailInput, {nullable:false})
    @Type(() => ScriptCreateWithoutBundleDetailInput)
    create!: ScriptCreateWithoutBundleDetailInput;

    @Field(() => ScriptWhereInput, {nullable:true})
    @Type(() => ScriptWhereInput)
    where?: ScriptWhereInput;
}
