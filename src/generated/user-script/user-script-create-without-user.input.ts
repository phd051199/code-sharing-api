import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateNestedOneWithoutUsersInput } from '../script/script-create-nested-one-without-users.input';

@InputType()
export class UserScriptCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ScriptCreateNestedOneWithoutUsersInput, {nullable:false})
    script!: ScriptCreateNestedOneWithoutUsersInput;
}
