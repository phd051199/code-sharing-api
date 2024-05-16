import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserScriptWhereUniqueInput } from './user-script-where-unique.input';
import { Type } from 'class-transformer';
import { UserScriptCreateWithoutUserInput } from './user-script-create-without-user.input';

@InputType()
export class UserScriptCreateOrConnectWithoutUserInput {

    @Field(() => UserScriptWhereUniqueInput, {nullable:false})
    @Type(() => UserScriptWhereUniqueInput)
    where!: Prisma.AtLeast<UserScriptWhereUniqueInput, 'userId_scriptId'>;

    @Field(() => UserScriptCreateWithoutUserInput, {nullable:false})
    @Type(() => UserScriptCreateWithoutUserInput)
    create!: UserScriptCreateWithoutUserInput;
}
