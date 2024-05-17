import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateWithoutUserInput } from './script-create-without-user.input';
import { Type } from 'class-transformer';
import { ScriptCreateOrConnectWithoutUserInput } from './script-create-or-connect-without-user.input';
import { ScriptUpsertWithWhereUniqueWithoutUserInput } from './script-upsert-with-where-unique-without-user.input';
import { ScriptCreateManyUserInputEnvelope } from './script-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';
import { ScriptUpdateWithWhereUniqueWithoutUserInput } from './script-update-with-where-unique-without-user.input';
import { ScriptUpdateManyWithWhereWithoutUserInput } from './script-update-many-with-where-without-user.input';
import { ScriptScalarWhereInput } from './script-scalar-where.input';

@InputType()
export class ScriptUpdateManyWithoutUserNestedInput {

    @Field(() => [ScriptCreateWithoutUserInput], {nullable:true})
    @Type(() => ScriptCreateWithoutUserInput)
    create?: Array<ScriptCreateWithoutUserInput>;

    @Field(() => [ScriptCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ScriptCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ScriptCreateOrConnectWithoutUserInput>;

    @Field(() => [ScriptUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ScriptUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ScriptUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ScriptCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ScriptCreateManyUserInputEnvelope)
    createMany?: ScriptCreateManyUserInputEnvelope;

    @Field(() => [ScriptWhereUniqueInput], {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>>;

    @Field(() => [ScriptWhereUniqueInput], {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>>;

    @Field(() => [ScriptWhereUniqueInput], {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>>;

    @Field(() => [ScriptWhereUniqueInput], {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>>;

    @Field(() => [ScriptUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ScriptUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ScriptUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ScriptUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ScriptUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ScriptUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ScriptScalarWhereInput], {nullable:true})
    @Type(() => ScriptScalarWhereInput)
    deleteMany?: Array<ScriptScalarWhereInput>;
}
