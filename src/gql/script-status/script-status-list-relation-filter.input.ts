import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptStatusWhereInput } from './script-status-where.input';

@InputType()
export class ScriptStatusListRelationFilter {

    @Field(() => ScriptStatusWhereInput, {nullable:true})
    every?: ScriptStatusWhereInput;

    @Field(() => ScriptStatusWhereInput, {nullable:true})
    some?: ScriptStatusWhereInput;

    @Field(() => ScriptStatusWhereInput, {nullable:true})
    none?: ScriptStatusWhereInput;
}
