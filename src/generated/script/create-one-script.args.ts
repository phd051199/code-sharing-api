import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScriptCreateInput } from './script-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneScriptArgs {

    @Field(() => ScriptCreateInput, {nullable:false})
    @Type(() => ScriptCreateInput)
    data!: ScriptCreateInput;
}
