import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserScriptUpdateInput } from './user-script-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserScriptWhereUniqueInput } from './user-script-where-unique.input';

@ArgsType()
export class UpdateOneUserScriptArgs {

    @Field(() => UserScriptUpdateInput, {nullable:false})
    @Type(() => UserScriptUpdateInput)
    data!: UserScriptUpdateInput;

    @Field(() => UserScriptWhereUniqueInput, {nullable:false})
    @Type(() => UserScriptWhereUniqueInput)
    where!: Prisma.AtLeast<UserScriptWhereUniqueInput, 'id' | 'userId_scriptId'>;
}
