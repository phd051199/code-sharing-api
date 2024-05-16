import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserScriptWhereUniqueInput } from './user-script-where-unique.input';
import { Type } from 'class-transformer';
import { UserScriptCreateWithoutScriptInput } from './user-script-create-without-script.input';

@InputType()
export class UserScriptCreateOrConnectWithoutScriptInput {

    @Field(() => UserScriptWhereUniqueInput, {nullable:false})
    @Type(() => UserScriptWhereUniqueInput)
    where!: Prisma.AtLeast<UserScriptWhereUniqueInput, 'userId_scriptId'>;

    @Field(() => UserScriptCreateWithoutScriptInput, {nullable:false})
    @Type(() => UserScriptCreateWithoutScriptInput)
    create!: UserScriptCreateWithoutScriptInput;
}
