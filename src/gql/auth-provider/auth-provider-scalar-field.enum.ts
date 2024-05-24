import { registerEnumType } from '@nestjs/graphql';

export enum AuthProviderScalarFieldEnum {
    userId = "userId",
    provider = "provider",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AuthProviderScalarFieldEnum, { name: 'AuthProviderScalarFieldEnum', description: undefined })
