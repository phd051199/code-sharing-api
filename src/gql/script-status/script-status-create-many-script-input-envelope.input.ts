import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptStatusCreateManyScriptInput } from './script-status-create-many-script.input';
import { Type } from 'class-transformer';

@InputType()
export class ScriptStatusCreateManyScriptInputEnvelope {

    @Field(() => [ScriptStatusCreateManyScriptInput], {nullable:false})
    @Type(() => ScriptStatusCreateManyScriptInput)
    data!: Array<ScriptStatusCreateManyScriptInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
