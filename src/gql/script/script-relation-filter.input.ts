import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptWhereInput } from './script-where.input';

@InputType()
export class ScriptRelationFilter {

    @Field(() => ScriptWhereInput, {nullable:true})
    is?: ScriptWhereInput;

    @Field(() => ScriptWhereInput, {nullable:true})
    isNot?: ScriptWhereInput;
}
