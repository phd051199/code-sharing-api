import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptStatusCreateWithoutScriptInput } from './script-status-create-without-script.input';
import { Type } from 'class-transformer';
import { ScriptStatusCreateOrConnectWithoutScriptInput } from './script-status-create-or-connect-without-script.input';
import { ScriptStatusUpsertWithWhereUniqueWithoutScriptInput } from './script-status-upsert-with-where-unique-without-script.input';
import { ScriptStatusCreateManyScriptInputEnvelope } from './script-status-create-many-script-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ScriptStatusWhereUniqueInput } from './script-status-where-unique.input';
import { ScriptStatusUpdateWithWhereUniqueWithoutScriptInput } from './script-status-update-with-where-unique-without-script.input';
import { ScriptStatusUpdateManyWithWhereWithoutScriptInput } from './script-status-update-many-with-where-without-script.input';
import { ScriptStatusScalarWhereInput } from './script-status-scalar-where.input';

@InputType()
export class ScriptStatusUpdateManyWithoutScriptNestedInput {

    @Field(() => [ScriptStatusCreateWithoutScriptInput], {nullable:true})
    @Type(() => ScriptStatusCreateWithoutScriptInput)
    create?: Array<ScriptStatusCreateWithoutScriptInput>;

    @Field(() => [ScriptStatusCreateOrConnectWithoutScriptInput], {nullable:true})
    @Type(() => ScriptStatusCreateOrConnectWithoutScriptInput)
    connectOrCreate?: Array<ScriptStatusCreateOrConnectWithoutScriptInput>;

    @Field(() => [ScriptStatusUpsertWithWhereUniqueWithoutScriptInput], {nullable:true})
    @Type(() => ScriptStatusUpsertWithWhereUniqueWithoutScriptInput)
    upsert?: Array<ScriptStatusUpsertWithWhereUniqueWithoutScriptInput>;

    @Field(() => ScriptStatusCreateManyScriptInputEnvelope, {nullable:true})
    @Type(() => ScriptStatusCreateManyScriptInputEnvelope)
    createMany?: ScriptStatusCreateManyScriptInputEnvelope;

    @Field(() => [ScriptStatusWhereUniqueInput], {nullable:true})
    @Type(() => ScriptStatusWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ScriptStatusWhereUniqueInput, 'id'>>;

    @Field(() => [ScriptStatusWhereUniqueInput], {nullable:true})
    @Type(() => ScriptStatusWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ScriptStatusWhereUniqueInput, 'id'>>;

    @Field(() => [ScriptStatusWhereUniqueInput], {nullable:true})
    @Type(() => ScriptStatusWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ScriptStatusWhereUniqueInput, 'id'>>;

    @Field(() => [ScriptStatusWhereUniqueInput], {nullable:true})
    @Type(() => ScriptStatusWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ScriptStatusWhereUniqueInput, 'id'>>;

    @Field(() => [ScriptStatusUpdateWithWhereUniqueWithoutScriptInput], {nullable:true})
    @Type(() => ScriptStatusUpdateWithWhereUniqueWithoutScriptInput)
    update?: Array<ScriptStatusUpdateWithWhereUniqueWithoutScriptInput>;

    @Field(() => [ScriptStatusUpdateManyWithWhereWithoutScriptInput], {nullable:true})
    @Type(() => ScriptStatusUpdateManyWithWhereWithoutScriptInput)
    updateMany?: Array<ScriptStatusUpdateManyWithWhereWithoutScriptInput>;

    @Field(() => [ScriptStatusScalarWhereInput], {nullable:true})
    @Type(() => ScriptStatusScalarWhereInput)
    deleteMany?: Array<ScriptStatusScalarWhereInput>;
}
