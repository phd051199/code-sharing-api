import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';
import { Type } from 'class-transformer';
import { ScriptCreateWithoutScript_statusInput } from './script-create-without-script-status.input';

@InputType()
export class ScriptCreateOrConnectWithoutScript_statusInput {

    @Field(() => ScriptWhereUniqueInput, {nullable:false})
    @Type(() => ScriptWhereUniqueInput)
    where!: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;

    @Field(() => ScriptCreateWithoutScript_statusInput, {nullable:false})
    @Type(() => ScriptCreateWithoutScript_statusInput)
    create!: ScriptCreateWithoutScript_statusInput;
}
