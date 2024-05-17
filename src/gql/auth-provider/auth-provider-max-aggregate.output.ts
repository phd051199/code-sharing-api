import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AuthProviders } from '../prisma/auth-providers.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AuthProviderMaxAggregate {

    @Field(() => AuthProviders, {nullable:true})
    provider?: keyof typeof AuthProviders;

    @Field(() => Int, {nullable:true})
    user_id?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
