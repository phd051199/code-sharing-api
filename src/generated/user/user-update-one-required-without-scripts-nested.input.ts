import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutScriptsInput } from './user-create-without-scripts.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutScriptsInput } from './user-create-or-connect-without-scripts.input';
import { UserUpsertWithoutScriptsInput } from './user-upsert-without-scripts.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutScriptsInput } from './user-update-to-one-with-where-without-scripts.input';

@InputType()
export class UserUpdateOneRequiredWithoutScriptsNestedInput {

    @Field(() => UserCreateWithoutScriptsInput, {nullable:true})
    @Type(() => UserCreateWithoutScriptsInput)
    create?: UserCreateWithoutScriptsInput;

    @Field(() => UserCreateOrConnectWithoutScriptsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutScriptsInput)
    connectOrCreate?: UserCreateOrConnectWithoutScriptsInput;

    @Field(() => UserUpsertWithoutScriptsInput, {nullable:true})
    @Type(() => UserUpsertWithoutScriptsInput)
    upsert?: UserUpsertWithoutScriptsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutScriptsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutScriptsInput)
    update?: UserUpdateToOneWithWhereWithoutScriptsInput;
}
