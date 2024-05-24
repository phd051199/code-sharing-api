import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScriptStatusUpdateInput } from './script-status-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ScriptStatusWhereUniqueInput } from './script-status-where-unique.input';

@ArgsType()
export class UpdateOneScriptStatusArgs {

    @Field(() => ScriptStatusUpdateInput, {nullable:false})
    @Type(() => ScriptStatusUpdateInput)
    data!: ScriptStatusUpdateInput;

    @Field(() => ScriptStatusWhereUniqueInput, {nullable:false})
    @Type(() => ScriptStatusWhereUniqueInput)
    where!: Prisma.AtLeast<ScriptStatusWhereUniqueInput, 'id' | 'script_id'>;
}
