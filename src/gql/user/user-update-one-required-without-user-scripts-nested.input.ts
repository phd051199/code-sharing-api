import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserScriptsInput } from './user-create-without-user-scripts.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserScriptsInput } from './user-create-or-connect-without-user-scripts.input';
import { UserUpsertWithoutUserScriptsInput } from './user-upsert-without-user-scripts.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutUserScriptsInput } from './user-update-to-one-with-where-without-user-scripts.input';

@InputType()
export class UserUpdateOneRequiredWithoutUserScriptsNestedInput {

    @Field(() => UserCreateWithoutUserScriptsInput, {nullable:true})
    @Type(() => UserCreateWithoutUserScriptsInput)
    create?: UserCreateWithoutUserScriptsInput;

    @Field(() => UserCreateOrConnectWithoutUserScriptsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserScriptsInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserScriptsInput;

    @Field(() => UserUpsertWithoutUserScriptsInput, {nullable:true})
    @Type(() => UserUpsertWithoutUserScriptsInput)
    upsert?: UserUpsertWithoutUserScriptsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutUserScriptsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutUserScriptsInput)
    update?: UserUpdateToOneWithWhereWithoutUserScriptsInput;
}
