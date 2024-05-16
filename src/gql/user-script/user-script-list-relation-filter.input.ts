import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScriptWhereInput } from './user-script-where.input';

@InputType()
export class UserScriptListRelationFilter {

    @Field(() => UserScriptWhereInput, {nullable:true})
    every?: UserScriptWhereInput;

    @Field(() => UserScriptWhereInput, {nullable:true})
    some?: UserScriptWhereInput;

    @Field(() => UserScriptWhereInput, {nullable:true})
    none?: UserScriptWhereInput;
}
