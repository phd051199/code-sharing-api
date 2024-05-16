import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthProviders } from '../prisma/o-auth-providers.enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class OAuthProviderProviderUserIdCompoundUniqueInput {

    @Field(() => OAuthProviders, {nullable:false})
    provider!: keyof typeof OAuthProviders;

    @Field(() => Int, {nullable:false})
    userId!: number;
}
