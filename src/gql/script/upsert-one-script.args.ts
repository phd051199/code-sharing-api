import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';
import { Type } from 'class-transformer';
import { ScriptCreateInput } from './script-create.input';
import { ScriptUpdateInput } from './script-update.input';

@ArgsType()
export class UpsertOneScriptArgs {

    @Field(() => ScriptWhereUniqueInput, {nullable:false})
    @Type(() => ScriptWhereUniqueInput)
    where!: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;

    @Field(() => ScriptCreateInput, {nullable:false})
    @Type(() => ScriptCreateInput)
    create!: ScriptCreateInput;

    @Field(() => ScriptUpdateInput, {nullable:false})
    @Type(() => ScriptUpdateInput)
    update!: ScriptUpdateInput;
}
