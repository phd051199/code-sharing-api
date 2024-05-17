import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AuthProviders } from '../prisma/auth-providers.enum';
import { Int } from '@nestjs/graphql';
import { AuthProviderCountAggregate } from './auth-provider-count-aggregate.output';
import { AuthProviderAvgAggregate } from './auth-provider-avg-aggregate.output';
import { AuthProviderSumAggregate } from './auth-provider-sum-aggregate.output';
import { AuthProviderMinAggregate } from './auth-provider-min-aggregate.output';
import { AuthProviderMaxAggregate } from './auth-provider-max-aggregate.output';

@ObjectType()
export class AuthProviderGroupBy {

    @Field(() => AuthProviders, {nullable:false})
    provider!: keyof typeof AuthProviders;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => AuthProviderCountAggregate, {nullable:true})
    _count?: AuthProviderCountAggregate;

    @Field(() => AuthProviderAvgAggregate, {nullable:true})
    _avg?: AuthProviderAvgAggregate;

    @Field(() => AuthProviderSumAggregate, {nullable:true})
    _sum?: AuthProviderSumAggregate;

    @Field(() => AuthProviderMinAggregate, {nullable:true})
    _min?: AuthProviderMinAggregate;

    @Field(() => AuthProviderMaxAggregate, {nullable:true})
    _max?: AuthProviderMaxAggregate;
}
