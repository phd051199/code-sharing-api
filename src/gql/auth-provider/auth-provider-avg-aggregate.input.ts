import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AuthProviderAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
