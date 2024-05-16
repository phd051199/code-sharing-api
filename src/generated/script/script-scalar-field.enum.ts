import { registerEnumType } from '@nestjs/graphql';

export enum ScriptScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    path = "path",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ScriptScalarFieldEnum, { name: 'ScriptScalarFieldEnum', description: undefined })
