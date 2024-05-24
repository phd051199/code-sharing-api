import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ScriptStatusWhereUniqueInput } from './script-status-where-unique.input';
import { Type } from 'class-transformer';
import { ScriptStatusCreateWithoutScriptInput } from './script-status-create-without-script.input';

@InputType()
export class ScriptStatusCreateOrConnectWithoutScriptInput {

    @Field(() => ScriptStatusWhereUniqueInput, {nullable:false})
    @Type(() => ScriptStatusWhereUniqueInput)
    where!: Prisma.AtLeast<ScriptStatusWhereUniqueInput, 'id' | 'script_id'>;

    @Field(() => ScriptStatusCreateWithoutScriptInput, {nullable:false})
    @Type(() => ScriptStatusCreateWithoutScriptInput)
    create!: ScriptStatusCreateWithoutScriptInput;
}
