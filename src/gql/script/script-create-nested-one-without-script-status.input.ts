import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateWithoutScript_statusInput } from './script-create-without-script-status.input';
import { Type } from 'class-transformer';
import { ScriptCreateOrConnectWithoutScript_statusInput } from './script-create-or-connect-without-script-status.input';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';

@InputType()
export class ScriptCreateNestedOneWithoutScript_statusInput {

    @Field(() => ScriptCreateWithoutScript_statusInput, {nullable:true})
    @Type(() => ScriptCreateWithoutScript_statusInput)
    create?: ScriptCreateWithoutScript_statusInput;

    @Field(() => ScriptCreateOrConnectWithoutScript_statusInput, {nullable:true})
    @Type(() => ScriptCreateOrConnectWithoutScript_statusInput)
    connectOrCreate?: ScriptCreateOrConnectWithoutScript_statusInput;

    @Field(() => ScriptWhereUniqueInput, {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    connect?: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;
}
