import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    user_name?: string;

    @Field(() => String, {nullable:true})
    display_name?: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => Int, {nullable:true})
    role_id?: number;

    @HideField()
    password?: string;

    @Field(() => Boolean, {nullable:true})
    is_verified?: boolean;

    @Field(() => Date, {nullable:true})
    last_login?: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
