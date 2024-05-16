import { registerEnumType } from '@nestjs/graphql';

export enum OAuthProviders {
    google = "google",
    github = "github"
}


registerEnumType(OAuthProviders, { name: 'OAuthProviders', description: undefined })
