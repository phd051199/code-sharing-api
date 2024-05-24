import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAuthProvidersInput } from './user-create-without-auth-providers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAuthProvidersInput } from './user-create-or-connect-without-auth-providers.input';
import { UserUpsertWithoutAuthProvidersInput } from './user-upsert-without-auth-providers.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutAuthProvidersInput } from './user-update-to-one-with-where-without-auth-providers.input';

@InputType()
export class UserUpdateOneRequiredWithoutAuthProvidersNestedInput {

    @Field(() => UserCreateWithoutAuthProvidersInput, {nullable:true})
    @Type(() => UserCreateWithoutAuthProvidersInput)
    create?: UserCreateWithoutAuthProvidersInput;

    @Field(() => UserCreateOrConnectWithoutAuthProvidersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAuthProvidersInput)
    connectOrCreate?: UserCreateOrConnectWithoutAuthProvidersInput;

    @Field(() => UserUpsertWithoutAuthProvidersInput, {nullable:true})
    @Type(() => UserUpsertWithoutAuthProvidersInput)
    upsert?: UserUpsertWithoutAuthProvidersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutAuthProvidersInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutAuthProvidersInput)
    update?: UserUpdateToOneWithWhereWithoutAuthProvidersInput;
}
