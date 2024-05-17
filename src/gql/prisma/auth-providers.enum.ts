import { registerEnumType } from '@nestjs/graphql';

export enum AuthProviders {
    google = "google",
    github = "github"
}


registerEnumType(AuthProviders, { name: 'AuthProviders', description: undefined })
