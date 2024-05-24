import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScriptStatusCreateInput } from './script-status-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneScriptStatusArgs {

    @Field(() => ScriptStatusCreateInput, {nullable:false})
    @Type(() => ScriptStatusCreateInput)
    data!: ScriptStatusCreateInput;
}
