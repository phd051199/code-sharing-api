import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScriptUpdateInput } from './script-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';

@ArgsType()
export class UpdateOneScriptArgs {

    @Field(() => ScriptUpdateInput, {nullable:false})
    @Type(() => ScriptUpdateInput)
    data!: ScriptUpdateInput;

    @Field(() => ScriptWhereUniqueInput, {nullable:false})
    @Type(() => ScriptWhereUniqueInput)
    where!: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;
}
