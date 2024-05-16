import { registerEnumType } from '@nestjs/graphql';

export enum UserScriptScalarFieldEnum {
    userId = "userId",
    scriptId = "scriptId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserScriptScalarFieldEnum, { name: 'UserScriptScalarFieldEnum', description: undefined })
