import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAuthProvidersInput } from './user-update-without-auth-providers.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAuthProvidersInput } from './user-create-without-auth-providers.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutAuthProvidersInput {

    @Field(() => UserUpdateWithoutAuthProvidersInput, {nullable:false})
    @Type(() => UserUpdateWithoutAuthProvidersInput)
    update!: UserUpdateWithoutAuthProvidersInput;

    @Field(() => UserCreateWithoutAuthProvidersInput, {nullable:false})
    @Type(() => UserCreateWithoutAuthProvidersInput)
    create!: UserCreateWithoutAuthProvidersInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
