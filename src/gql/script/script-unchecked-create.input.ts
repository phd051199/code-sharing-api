import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserScriptUncheckedCreateNestedManyWithoutScriptInput } from '../user-script/user-script-unchecked-create-nested-many-without-script.input';

@InputType()
export class ScriptUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => UserScriptUncheckedCreateNestedManyWithoutScriptInput, {nullable:true})
    userScripts?: UserScriptUncheckedCreateNestedManyWithoutScriptInput;
}
