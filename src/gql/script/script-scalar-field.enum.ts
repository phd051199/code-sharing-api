import { registerEnumType } from '@nestjs/graphql';

export enum ScriptScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    icon = "icon",
    path = "path",
    authorId = "authorId",
    categoryId = "categoryId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ScriptScalarFieldEnum, { name: 'ScriptScalarFieldEnum', description: undefined })
