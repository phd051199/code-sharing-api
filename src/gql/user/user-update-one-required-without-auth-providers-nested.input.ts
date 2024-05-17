import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAuth_providersInput } from './user-create-without-auth-providers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAuth_providersInput } from './user-create-or-connect-without-auth-providers.input';
import { UserUpsertWithoutAuth_providersInput } from './user-upsert-without-auth-providers.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutAuth_providersInput } from './user-update-to-one-with-where-without-auth-providers.input';

@InputType()
export class UserUpdateOneRequiredWithoutAuth_providersNestedInput {

    @Field(() => UserCreateWithoutAuth_providersInput, {nullable:true})
    @Type(() => UserCreateWithoutAuth_providersInput)
    create?: UserCreateWithoutAuth_providersInput;

    @Field(() => UserCreateOrConnectWithoutAuth_providersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAuth_providersInput)
    connectOrCreate?: UserCreateOrConnectWithoutAuth_providersInput;

    @Field(() => UserUpsertWithoutAuth_providersInput, {nullable:true})
    @Type(() => UserUpsertWithoutAuth_providersInput)
    upsert?: UserUpsertWithoutAuth_providersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutAuth_providersInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutAuth_providersInput)
    update?: UserUpdateToOneWithWhereWithoutAuth_providersInput;
}
