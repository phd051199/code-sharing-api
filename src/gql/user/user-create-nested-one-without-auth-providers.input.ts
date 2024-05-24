import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAuthProvidersInput } from './user-create-without-auth-providers.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAuthProvidersInput } from './user-create-or-connect-without-auth-providers.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAuthProvidersInput {

    @Field(() => UserCreateWithoutAuthProvidersInput, {nullable:true})
    @Type(() => UserCreateWithoutAuthProvidersInput)
    create?: UserCreateWithoutAuthProvidersInput;

    @Field(() => UserCreateOrConnectWithoutAuthProvidersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAuthProvidersInput)
    connectOrCreate?: UserCreateOrConnectWithoutAuthProvidersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
