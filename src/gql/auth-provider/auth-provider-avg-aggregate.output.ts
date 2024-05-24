import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class AuthProviderAvgAggregate {

    @Field(() => Float, {nullable:true})
    userId?: number;
}
