import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    userName = "userName",
    displayName = "displayName",
    avatar = "avatar",
    roleId = "roleId",
    password = "password",
    isVerified = "isVerified",
    lastLogin = "lastLogin",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
