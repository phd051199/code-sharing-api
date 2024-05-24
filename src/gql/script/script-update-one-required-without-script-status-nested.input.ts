import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateWithoutScript_statusInput } from './script-create-without-script-status.input';
import { Type } from 'class-transformer';
import { ScriptCreateOrConnectWithoutScript_statusInput } from './script-create-or-connect-without-script-status.input';
import { ScriptUpsertWithoutScript_statusInput } from './script-upsert-without-script-status.input';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';
import { ScriptUpdateToOneWithWhereWithoutScript_statusInput } from './script-update-to-one-with-where-without-script-status.input';

@InputType()
export class ScriptUpdateOneRequiredWithoutScript_statusNestedInput {

    @Field(() => ScriptCreateWithoutScript_statusInput, {nullable:true})
    @Type(() => ScriptCreateWithoutScript_statusInput)
    create?: ScriptCreateWithoutScript_statusInput;

    @Field(() => ScriptCreateOrConnectWithoutScript_statusInput, {nullable:true})
    @Type(() => ScriptCreateOrConnectWithoutScript_statusInput)
    connectOrCreate?: ScriptCreateOrConnectWithoutScript_statusInput;

    @Field(() => ScriptUpsertWithoutScript_statusInput, {nullable:true})
    @Type(() => ScriptUpsertWithoutScript_statusInput)
    upsert?: ScriptUpsertWithoutScript_statusInput;

    @Field(() => ScriptWhereUniqueInput, {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    connect?: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;

    @Field(() => ScriptUpdateToOneWithWhereWithoutScript_statusInput, {nullable:true})
    @Type(() => ScriptUpdateToOneWithWhereWithoutScript_statusInput)
    update?: ScriptUpdateToOneWithWhereWithoutScript_statusInput;
}
