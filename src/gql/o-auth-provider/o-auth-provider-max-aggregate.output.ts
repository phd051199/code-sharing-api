import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OAuthProviders } from '../prisma/o-auth-providers.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OAuthProviderMaxAggregate {

    @Field(() => OAuthProviders, {nullable:true})
    provider?: keyof typeof OAuthProviders;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
