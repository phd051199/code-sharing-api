import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AuthProviders } from '../prisma/auth-providers.enum';

@ObjectType()
export class AuthProviderMaxAggregate {

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => AuthProviders, {nullable:true})
    provider?: keyof typeof AuthProviders;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
