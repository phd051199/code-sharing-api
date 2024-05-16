import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutScriptsInput } from './user-create-without-scripts.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutScriptsInput } from './user-create-or-connect-without-scripts.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutScriptsInput {

    @Field(() => UserCreateWithoutScriptsInput, {nullable:true})
    @Type(() => UserCreateWithoutScriptsInput)
    create?: UserCreateWithoutScriptsInput;

    @Field(() => UserCreateOrConnectWithoutScriptsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutScriptsInput)
    connectOrCreate?: UserCreateOrConnectWithoutScriptsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
