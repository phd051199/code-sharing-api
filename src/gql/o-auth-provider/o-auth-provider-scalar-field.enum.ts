import { registerEnumType } from '@nestjs/graphql';

export enum OAuthProviderScalarFieldEnum {
    provider = "provider",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(OAuthProviderScalarFieldEnum, { name: 'OAuthProviderScalarFieldEnum', description: undefined })
