import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScriptCreateNestedManyWithoutScriptInput } from '../user-script/user-script-create-nested-many-without-script.input';

@InputType()
export class ScriptCreateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserScriptCreateNestedManyWithoutScriptInput, {nullable:true})
    userScripts?: UserScriptCreateNestedManyWithoutScriptInput;
}
