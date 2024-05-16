import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserScriptWhereUniqueInput } from './user-script-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueUserScriptArgs {

    @Field(() => UserScriptWhereUniqueInput, {nullable:false})
    @Type(() => UserScriptWhereUniqueInput)
    where!: Prisma.AtLeast<UserScriptWhereUniqueInput, 'userId_scriptId'>;
}
