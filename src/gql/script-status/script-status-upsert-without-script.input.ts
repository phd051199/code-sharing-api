import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptStatusUpdateWithoutScriptInput } from './script-status-update-without-script.input';
import { Type } from 'class-transformer';
import { ScriptStatusCreateWithoutScriptInput } from './script-status-create-without-script.input';
import { ScriptStatusWhereInput } from './script-status-where.input';

@InputType()
export class ScriptStatusUpsertWithoutScriptInput {

    @Field(() => ScriptStatusUpdateWithoutScriptInput, {nullable:false})
    @Type(() => ScriptStatusUpdateWithoutScriptInput)
    update!: ScriptStatusUpdateWithoutScriptInput;

    @Field(() => ScriptStatusCreateWithoutScriptInput, {nullable:false})
    @Type(() => ScriptStatusCreateWithoutScriptInput)
    create!: ScriptStatusCreateWithoutScriptInput;

    @Field(() => ScriptStatusWhereInput, {nullable:true})
    @Type(() => ScriptStatusWhereInput)
    where?: ScriptStatusWhereInput;
}
