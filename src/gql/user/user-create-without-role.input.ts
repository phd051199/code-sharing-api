import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviderCreateNestedManyWithoutUserInput } from '../auth-provider/auth-provider-create-nested-many-without-user.input';
import { ScriptCreateNestedManyWithoutUserInput } from '../script/script-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutRoleInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    user_name?: string;

    @Field(() => String, {nullable:true})
    display_name?: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Boolean, {nullable:true})
    is_verified?: boolean;

    @Field(() => Date, {nullable:true})
    last_login?: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => AuthProviderCreateNestedManyWithoutUserInput, {nullable:true})
    auth_providers?: AuthProviderCreateNestedManyWithoutUserInput;

    @Field(() => ScriptCreateNestedManyWithoutUserInput, {nullable:true})
    scripts?: ScriptCreateNestedManyWithoutUserInput;
}
