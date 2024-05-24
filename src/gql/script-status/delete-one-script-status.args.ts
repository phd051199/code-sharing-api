import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ScriptStatusWhereUniqueInput } from './script-status-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneScriptStatusArgs {

    @Field(() => ScriptStatusWhereUniqueInput, {nullable:false})
    @Type(() => ScriptStatusWhereUniqueInput)
    where!: Prisma.AtLeast<ScriptStatusWhereUniqueInput, 'id' | 'script_id'>;
}
