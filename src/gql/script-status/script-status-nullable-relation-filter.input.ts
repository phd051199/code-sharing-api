import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptStatusWhereInput } from './script-status-where.input';

@InputType()
export class ScriptStatusNullableRelationFilter {

    @Field(() => ScriptStatusWhereInput, {nullable:true})
    is?: ScriptStatusWhereInput;

    @Field(() => ScriptStatusWhereInput, {nullable:true})
    isNot?: ScriptStatusWhereInput;
}
