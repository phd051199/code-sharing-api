import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserScriptWhereUniqueInput } from './user-script-where-unique.input';
import { Type } from 'class-transformer';
import { UserScriptUpdateWithoutUserInput } from './user-script-update-without-user.input';
import { UserScriptCreateWithoutUserInput } from './user-script-create-without-user.input';

@InputType()
export class UserScriptUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UserScriptWhereUniqueInput, {nullable:false})
    @Type(() => UserScriptWhereUniqueInput)
    where!: Prisma.AtLeast<UserScriptWhereUniqueInput, 'userId_scriptId'>;

    @Field(() => UserScriptUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserScriptUpdateWithoutUserInput)
    update!: UserScriptUpdateWithoutUserInput;

    @Field(() => UserScriptCreateWithoutUserInput, {nullable:false})
    @Type(() => UserScriptCreateWithoutUserInput)
    create!: UserScriptCreateWithoutUserInput;
}
