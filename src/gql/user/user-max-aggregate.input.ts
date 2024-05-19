import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    user_name?: true;

    @Field(() => Boolean, {nullable:true})
    display_name?: true;

    @Field(() => Boolean, {nullable:true})
    avatar?: true;

    @Field(() => Boolean, {nullable:true})
    role_id?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;

    @Field(() => Boolean, {nullable:true})
    is_verified?: true;

    @Field(() => Boolean, {nullable:true})
    last_login?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;
}
