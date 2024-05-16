import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUserScriptsInput } from '../user/user-create-nested-one-without-user-scripts.input';

@InputType()
export class UserScriptCreateWithoutScriptInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutUserScriptsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserScriptsInput;
}
