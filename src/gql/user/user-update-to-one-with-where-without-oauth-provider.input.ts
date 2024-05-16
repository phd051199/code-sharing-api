import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutOauthProviderInput } from './user-update-without-oauth-provider.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutOauthProviderInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutOauthProviderInput, {nullable:false})
    @Type(() => UserUpdateWithoutOauthProviderInput)
    data!: UserUpdateWithoutOauthProviderInput;
}
