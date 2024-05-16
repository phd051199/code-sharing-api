import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserScriptWhereUniqueInput } from './user-script-where-unique.input';
import { Type } from 'class-transformer';
import { UserScriptCreateInput } from './user-script-create.input';
import { UserScriptUpdateInput } from './user-script-update.input';

@ArgsType()
export class UpsertOneUserScriptArgs {

    @Field(() => UserScriptWhereUniqueInput, {nullable:false})
    @Type(() => UserScriptWhereUniqueInput)
    where!: Prisma.AtLeast<UserScriptWhereUniqueInput, 'userId_scriptId'>;

    @Field(() => UserScriptCreateInput, {nullable:false})
    @Type(() => UserScriptCreateInput)
    create!: UserScriptCreateInput;

    @Field(() => UserScriptUpdateInput, {nullable:false})
    @Type(() => UserScriptUpdateInput)
    update!: UserScriptUpdateInput;
}
