import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutScriptsInput } from '../user/user-create-nested-one-without-scripts.input';
import { ScriptCreateNestedOneWithoutUsersInput } from '../script/script-create-nested-one-without-users.input';

@InputType()
export class UserScriptCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutScriptsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutScriptsInput;

    @Field(() => ScriptCreateNestedOneWithoutUsersInput, {nullable:false})
    script!: ScriptCreateNestedOneWithoutUsersInput;
}
