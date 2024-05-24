import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptStatusWhereInput } from './script-status-where.input';
import { Type } from 'class-transformer';
import { ScriptStatusUpdateWithoutScriptInput } from './script-status-update-without-script.input';

@InputType()
export class ScriptStatusUpdateToOneWithWhereWithoutScriptInput {

    @Field(() => ScriptStatusWhereInput, {nullable:true})
    @Type(() => ScriptStatusWhereInput)
    where?: ScriptStatusWhereInput;

    @Field(() => ScriptStatusUpdateWithoutScriptInput, {nullable:false})
    @Type(() => ScriptStatusUpdateWithoutScriptInput)
    data!: ScriptStatusUpdateWithoutScriptInput;
}
