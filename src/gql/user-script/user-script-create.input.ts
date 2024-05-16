import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUserScriptsInput } from '../user/user-create-nested-one-without-user-scripts.input';
import { ScriptCreateNestedOneWithoutUserScriptsInput } from '../script/script-create-nested-one-without-user-scripts.input';

@InputType()
export class UserScriptCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutUserScriptsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserScriptsInput;

    @Field(() => ScriptCreateNestedOneWithoutUserScriptsInput, {nullable:false})
    script!: ScriptCreateNestedOneWithoutUserScriptsInput;
}
