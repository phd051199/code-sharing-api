import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    user_name!: number;

    @Field(() => Int, {nullable:false})
    display_name!: number;

    @Field(() => Int, {nullable:false})
    avatar!: number;

    @Field(() => Int, {nullable:false})
    role_id!: number;

    @HideField()
    password!: number;

    @Field(() => Int, {nullable:false})
    is_verified!: number;

    @Field(() => Int, {nullable:false})
    last_login!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
