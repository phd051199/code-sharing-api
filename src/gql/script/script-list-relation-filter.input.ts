import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptWhereInput } from './script-where.input';

@InputType()
export class ScriptListRelationFilter {

    @Field(() => ScriptWhereInput, {nullable:true})
    every?: ScriptWhereInput;

    @Field(() => ScriptWhereInput, {nullable:true})
    some?: ScriptWhereInput;

    @Field(() => ScriptWhereInput, {nullable:true})
    none?: ScriptWhereInput;
}
