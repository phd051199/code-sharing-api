import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ScriptStatusWhereUniqueInput } from './script-status-where-unique.input';
import { Type } from 'class-transformer';
import { ScriptStatusUpdateWithoutScriptInput } from './script-status-update-without-script.input';

@InputType()
export class ScriptStatusUpdateWithWhereUniqueWithoutScriptInput {

    @Field(() => ScriptStatusWhereUniqueInput, {nullable:false})
    @Type(() => ScriptStatusWhereUniqueInput)
    where!: Prisma.AtLeast<ScriptStatusWhereUniqueInput, 'id'>;

    @Field(() => ScriptStatusUpdateWithoutScriptInput, {nullable:false})
    @Type(() => ScriptStatusUpdateWithoutScriptInput)
    data!: ScriptStatusUpdateWithoutScriptInput;
}
