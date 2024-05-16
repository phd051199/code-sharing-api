import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserScriptsInput } from './user-create-without-user-scripts.input';

@InputType()
export class UserCreateOrConnectWithoutUserScriptsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutUserScriptsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserScriptsInput)
    create!: UserCreateWithoutUserScriptsInput;
}
