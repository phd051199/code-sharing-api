import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthProviders } from '../prisma/o-auth-providers.enum';

@InputType()
export class OAuthProviderCreateManyUserInput {

    @Field(() => OAuthProviders, {nullable:false})
    provider!: keyof typeof OAuthProviders;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
