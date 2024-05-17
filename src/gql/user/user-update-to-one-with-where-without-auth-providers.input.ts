import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAuth_providersInput } from './user-update-without-auth-providers.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutAuth_providersInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutAuth_providersInput, {nullable:false})
    @Type(() => UserUpdateWithoutAuth_providersInput)
    data!: UserUpdateWithoutAuth_providersInput;
}
