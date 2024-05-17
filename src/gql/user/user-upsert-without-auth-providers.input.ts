import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAuth_providersInput } from './user-update-without-auth-providers.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAuth_providersInput } from './user-create-without-auth-providers.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutAuth_providersInput {

    @Field(() => UserUpdateWithoutAuth_providersInput, {nullable:false})
    @Type(() => UserUpdateWithoutAuth_providersInput)
    update!: UserUpdateWithoutAuth_providersInput;

    @Field(() => UserCreateWithoutAuth_providersInput, {nullable:false})
    @Type(() => UserCreateWithoutAuth_providersInput)
    create!: UserCreateWithoutAuth_providersInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
