import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserScriptsInput } from './user-create-without-user-scripts.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserScriptsInput } from './user-create-or-connect-without-user-scripts.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUserScriptsInput {

    @Field(() => UserCreateWithoutUserScriptsInput, {nullable:true})
    @Type(() => UserCreateWithoutUserScriptsInput)
    create?: UserCreateWithoutUserScriptsInput;

    @Field(() => UserCreateOrConnectWithoutUserScriptsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserScriptsInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserScriptsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
