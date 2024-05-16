import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScriptWhereInput } from './script-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyScriptArgs {

    @Field(() => ScriptWhereInput, {nullable:true})
    @Type(() => ScriptWhereInput)
    where?: ScriptWhereInput;
}
