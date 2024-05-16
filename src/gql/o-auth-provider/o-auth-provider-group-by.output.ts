import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OAuthProviders } from '../prisma/o-auth-providers.enum';
import { Int } from '@nestjs/graphql';
import { OAuthProviderCountAggregate } from './o-auth-provider-count-aggregate.output';
import { OAuthProviderAvgAggregate } from './o-auth-provider-avg-aggregate.output';
import { OAuthProviderSumAggregate } from './o-auth-provider-sum-aggregate.output';
import { OAuthProviderMinAggregate } from './o-auth-provider-min-aggregate.output';
import { OAuthProviderMaxAggregate } from './o-auth-provider-max-aggregate.output';

@ObjectType()
export class OAuthProviderGroupBy {

    @Field(() => OAuthProviders, {nullable:false})
    provider!: keyof typeof OAuthProviders;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => OAuthProviderCountAggregate, {nullable:true})
    _count?: OAuthProviderCountAggregate;

    @Field(() => OAuthProviderAvgAggregate, {nullable:true})
    _avg?: OAuthProviderAvgAggregate;

    @Field(() => OAuthProviderSumAggregate, {nullable:true})
    _sum?: OAuthProviderSumAggregate;

    @Field(() => OAuthProviderMinAggregate, {nullable:true})
    _min?: OAuthProviderMinAggregate;

    @Field(() => OAuthProviderMaxAggregate, {nullable:true})
    _max?: OAuthProviderMaxAggregate;
}
