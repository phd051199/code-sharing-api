import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AuthProviderUncheckedCreateNestedManyWithoutUserInput } from '../auth-provider/auth-provider-unchecked-create-nested-many-without-user.input';
import { ScriptUncheckedCreateNestedManyWithoutUserInput } from '../script/script-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutRoleInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => AuthProviderUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    auth_providers?: AuthProviderUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ScriptUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    scripts?: ScriptUncheckedCreateNestedManyWithoutUserInput;
}
