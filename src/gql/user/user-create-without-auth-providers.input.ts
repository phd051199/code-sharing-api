import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutUsersInput } from '../role/role-create-nested-one-without-users.input';
import { ScriptCreateNestedManyWithoutUserInput } from '../script/script-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutAuth_providersInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    user_name?: string;

    @Field(() => String, {nullable:true})
    display_name?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Date, {nullable:true})
    last_login?: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => RoleCreateNestedOneWithoutUsersInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutUsersInput;

    @Field(() => ScriptCreateNestedManyWithoutUserInput, {nullable:true})
    scripts?: ScriptCreateNestedManyWithoutUserInput;
}
