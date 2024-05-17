import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    user_name = "user_name",
    display_name = "display_name",
    role_id = "role_id",
    password = "password",
    last_login = "last_login",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
