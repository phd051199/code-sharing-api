import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAuth_providersInput } from './user-create-without-auth-providers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAuth_providersInput } from './user-create-or-connect-without-auth-providers.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAuth_providersInput {

    @Field(() => UserCreateWithoutAuth_providersInput, {nullable:true})
    @Type(() => UserCreateWithoutAuth_providersInput)
    create?: UserCreateWithoutAuth_providersInput;

    @Field(() => UserCreateOrConnectWithoutAuth_providersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAuth_providersInput)
    connectOrCreate?: UserCreateOrConnectWithoutAuth_providersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
