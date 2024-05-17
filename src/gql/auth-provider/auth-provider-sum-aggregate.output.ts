import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AuthProviderSumAggregate {

    @Field(() => Int, {nullable:true})
    user_id?: number;
}
