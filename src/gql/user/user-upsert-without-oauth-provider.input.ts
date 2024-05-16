import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutOauthProviderInput } from './user-update-without-oauth-provider.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOauthProviderInput } from './user-create-without-oauth-provider.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutOauthProviderInput {

    @Field(() => UserUpdateWithoutOauthProviderInput, {nullable:false})
    @Type(() => UserUpdateWithoutOauthProviderInput)
    update!: UserUpdateWithoutOauthProviderInput;

    @Field(() => UserCreateWithoutOauthProviderInput, {nullable:false})
    @Type(() => UserCreateWithoutOauthProviderInput)
    create!: UserCreateWithoutOauthProviderInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
