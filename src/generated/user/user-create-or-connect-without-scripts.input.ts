import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutScriptsInput } from './user-create-without-scripts.input';

@InputType()
export class UserCreateOrConnectWithoutScriptsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutScriptsInput, {nullable:false})
    @Type(() => UserCreateWithoutScriptsInput)
    create!: UserCreateWithoutScriptsInput;
}
