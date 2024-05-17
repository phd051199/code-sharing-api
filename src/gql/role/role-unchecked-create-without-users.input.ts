import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermissionUncheckedCreateNestedManyWithoutRoleInput } from '../permission/permission-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateWithoutUsersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => PermissionUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    permissions?: PermissionUncheckedCreateNestedManyWithoutRoleInput;
}
