import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ScriptStatusWhereUniqueInput } from './script-status-where-unique.input';
import { Type } from 'class-transformer';
import { ScriptStatusCreateInput } from './script-status-create.input';
import { ScriptStatusUpdateInput } from './script-status-update.input';

@ArgsType()
export class UpsertOneScriptStatusArgs {

    @Field(() => ScriptStatusWhereUniqueInput, {nullable:false})
    @Type(() => ScriptStatusWhereUniqueInput)
    where!: Prisma.AtLeast<ScriptStatusWhereUniqueInput, 'id' | 'script_id'>;

    @Field(() => ScriptStatusCreateInput, {nullable:false})
    @Type(() => ScriptStatusCreateInput)
    create!: ScriptStatusCreateInput;

    @Field(() => ScriptStatusUpdateInput, {nullable:false})
    @Type(() => ScriptStatusUpdateInput)
    update!: ScriptStatusUpdateInput;
}
