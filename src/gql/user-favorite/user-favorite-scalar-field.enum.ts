import { registerEnumType } from '@nestjs/graphql';

export enum UserFavoriteScalarFieldEnum {
    id = "id",
    userId = "userId",
    scriptId = "scriptId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserFavoriteScalarFieldEnum, { name: 'UserFavoriteScalarFieldEnum', description: undefined })
