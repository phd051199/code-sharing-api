import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutOauthProvidersInput } from './user-update-without-oauth-providers.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOauthProvidersInput } from './user-create-without-oauth-providers.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutOauthProvidersInput {

    @Field(() => UserUpdateWithoutOauthProvidersInput, {nullable:false})
    @Type(() => UserUpdateWithoutOauthProvidersInput)
    update!: UserUpdateWithoutOauthProvidersInput;

    @Field(() => UserCreateWithoutOauthProvidersInput, {nullable:false})
    @Type(() => UserCreateWithoutOauthProvidersInput)
    create!: UserCreateWithoutOauthProvidersInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
