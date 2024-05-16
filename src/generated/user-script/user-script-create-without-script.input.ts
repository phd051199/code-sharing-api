import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutScriptsInput } from '../user/user-create-nested-one-without-scripts.input';

@InputType()
export class UserScriptCreateWithoutScriptInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutScriptsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutScriptsInput;
}
