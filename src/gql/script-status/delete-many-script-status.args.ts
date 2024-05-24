import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScriptStatusWhereInput } from './script-status-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyScriptStatusArgs {

    @Field(() => ScriptStatusWhereInput, {nullable:true})
    @Type(() => ScriptStatusWhereInput)
    where?: ScriptStatusWhereInput;
}
