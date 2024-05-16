import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserScriptWhereUniqueInput } from './user-script-where-unique.input';
import { Type } from 'class-transformer';
import { UserScriptUpdateWithoutScriptInput } from './user-script-update-without-script.input';
import { UserScriptCreateWithoutScriptInput } from './user-script-create-without-script.input';

@InputType()
export class UserScriptUpsertWithWhereUniqueWithoutScriptInput {

    @Field(() => UserScriptWhereUniqueInput, {nullable:false})
    @Type(() => UserScriptWhereUniqueInput)
    where!: Prisma.AtLeast<UserScriptWhereUniqueInput, 'id' | 'userId_scriptId'>;

    @Field(() => UserScriptUpdateWithoutScriptInput, {nullable:false})
    @Type(() => UserScriptUpdateWithoutScriptInput)
    update!: UserScriptUpdateWithoutScriptInput;

    @Field(() => UserScriptCreateWithoutScriptInput, {nullable:false})
    @Type(() => UserScriptCreateWithoutScriptInput)
    create!: UserScriptCreateWithoutScriptInput;
}
