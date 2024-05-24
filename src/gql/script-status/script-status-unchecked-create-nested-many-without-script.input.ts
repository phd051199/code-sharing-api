import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptStatusCreateWithoutScriptInput } from './script-status-create-without-script.input';
import { Type } from 'class-transformer';
import { ScriptStatusCreateOrConnectWithoutScriptInput } from './script-status-create-or-connect-without-script.input';
import { ScriptStatusCreateManyScriptInputEnvelope } from './script-status-create-many-script-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ScriptStatusWhereUniqueInput } from './script-status-where-unique.input';

@InputType()
export class ScriptStatusUncheckedCreateNestedManyWithoutScriptInput {

    @Field(() => [ScriptStatusCreateWithoutScriptInput], {nullable:true})
    @Type(() => ScriptStatusCreateWithoutScriptInput)
    create?: Array<ScriptStatusCreateWithoutScriptInput>;

    @Field(() => [ScriptStatusCreateOrConnectWithoutScriptInput], {nullable:true})
    @Type(() => ScriptStatusCreateOrConnectWithoutScriptInput)
    connectOrCreate?: Array<ScriptStatusCreateOrConnectWithoutScriptInput>;

    @Field(() => ScriptStatusCreateManyScriptInputEnvelope, {nullable:true})
    @Type(() => ScriptStatusCreateManyScriptInputEnvelope)
    createMany?: ScriptStatusCreateManyScriptInputEnvelope;

    @Field(() => [ScriptStatusWhereUniqueInput], {nullable:true})
    @Type(() => ScriptStatusWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ScriptStatusWhereUniqueInput, 'id'>>;
}
