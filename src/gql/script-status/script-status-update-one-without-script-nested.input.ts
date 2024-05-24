import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptStatusCreateWithoutScriptInput } from './script-status-create-without-script.input';
import { Type } from 'class-transformer';
import { ScriptStatusCreateOrConnectWithoutScriptInput } from './script-status-create-or-connect-without-script.input';
import { ScriptStatusUpsertWithoutScriptInput } from './script-status-upsert-without-script.input';
import { ScriptStatusWhereInput } from './script-status-where.input';
import { Prisma } from '@prisma/client';
import { ScriptStatusWhereUniqueInput } from './script-status-where-unique.input';
import { ScriptStatusUpdateToOneWithWhereWithoutScriptInput } from './script-status-update-to-one-with-where-without-script.input';

@InputType()
export class ScriptStatusUpdateOneWithoutScriptNestedInput {

    @Field(() => ScriptStatusCreateWithoutScriptInput, {nullable:true})
    @Type(() => ScriptStatusCreateWithoutScriptInput)
    create?: ScriptStatusCreateWithoutScriptInput;

    @Field(() => ScriptStatusCreateOrConnectWithoutScriptInput, {nullable:true})
    @Type(() => ScriptStatusCreateOrConnectWithoutScriptInput)
    connectOrCreate?: ScriptStatusCreateOrConnectWithoutScriptInput;

    @Field(() => ScriptStatusUpsertWithoutScriptInput, {nullable:true})
    @Type(() => ScriptStatusUpsertWithoutScriptInput)
    upsert?: ScriptStatusUpsertWithoutScriptInput;

    @Field(() => ScriptStatusWhereInput, {nullable:true})
    @Type(() => ScriptStatusWhereInput)
    disconnect?: ScriptStatusWhereInput;

    @Field(() => ScriptStatusWhereInput, {nullable:true})
    @Type(() => ScriptStatusWhereInput)
    delete?: ScriptStatusWhereInput;

    @Field(() => ScriptStatusWhereUniqueInput, {nullable:true})
    @Type(() => ScriptStatusWhereUniqueInput)
    connect?: Prisma.AtLeast<ScriptStatusWhereUniqueInput, 'id' | 'script_id'>;

    @Field(() => ScriptStatusUpdateToOneWithWhereWithoutScriptInput, {nullable:true})
    @Type(() => ScriptStatusUpdateToOneWithWhereWithoutScriptInput)
    update?: ScriptStatusUpdateToOneWithWhereWithoutScriptInput;
}
