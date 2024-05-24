import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptWhereInput } from './script-where.input';
import { Type } from 'class-transformer';
import { ScriptUpdateWithoutBundleDetailInput } from './script-update-without-bundle-detail.input';

@InputType()
export class ScriptUpdateToOneWithWhereWithoutBundleDetailInput {

    @Field(() => ScriptWhereInput, {nullable:true})
    @Type(() => ScriptWhereInput)
    where?: ScriptWhereInput;

    @Field(() => ScriptUpdateWithoutBundleDetailInput, {nullable:false})
    @Type(() => ScriptUpdateWithoutBundleDetailInput)
    data!: ScriptUpdateWithoutBundleDetailInput;
}
