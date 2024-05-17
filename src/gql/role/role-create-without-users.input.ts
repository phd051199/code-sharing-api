import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateNestedManyWithoutRoleInput } from '../permission/permission-create-nested-many-without-role.input';

@InputType()
export class RoleCreateWithoutUsersInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => PermissionCreateNestedManyWithoutRoleInput, {nullable:true})
    permissions?: PermissionCreateNestedManyWithoutRoleInput;
}
