import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptStatusCreateWithoutScriptInput } from './script-status-create-without-script.input';
import { Type } from 'class-transformer';
import { ScriptStatusCreateOrConnectWithoutScriptInput } from './script-status-create-or-connect-without-script.input';
import { Prisma } from '@prisma/client';
import { ScriptStatusWhereUniqueInput } from './script-status-where-unique.input';

@InputType()
export class ScriptStatusUncheckedCreateNestedOneWithoutScriptInput {

    @Field(() => ScriptStatusCreateWithoutScriptInput, {nullable:true})
    @Type(() => ScriptStatusCreateWithoutScriptInput)
    create?: ScriptStatusCreateWithoutScriptInput;

    @Field(() => ScriptStatusCreateOrConnectWithoutScriptInput, {nullable:true})
    @Type(() => ScriptStatusCreateOrConnectWithoutScriptInput)
    connectOrCreate?: ScriptStatusCreateOrConnectWithoutScriptInput;

    @Field(() => ScriptStatusWhereUniqueInput, {nullable:true})
    @Type(() => ScriptStatusWhereUniqueInput)
    connect?: Prisma.AtLeast<ScriptStatusWhereUniqueInput, 'id' | 'script_id'>;
}
