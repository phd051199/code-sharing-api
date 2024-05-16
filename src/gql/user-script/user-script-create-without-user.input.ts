import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateNestedOneWithoutUserScriptsInput } from '../script/script-create-nested-one-without-user-scripts.input';

@InputType()
export class UserScriptCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ScriptCreateNestedOneWithoutUserScriptsInput, {nullable:false})
    script!: ScriptCreateNestedOneWithoutUserScriptsInput;
}
