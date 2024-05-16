import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';
import { Type } from 'class-transformer';
import { ScriptCreateWithoutUserScriptsInput } from './script-create-without-user-scripts.input';

@InputType()
export class ScriptCreateOrConnectWithoutUserScriptsInput {

    @Field(() => ScriptWhereUniqueInput, {nullable:false})
    @Type(() => ScriptWhereUniqueInput)
    where!: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;

    @Field(() => ScriptCreateWithoutUserScriptsInput, {nullable:false})
    @Type(() => ScriptCreateWithoutUserScriptsInput)
    create!: ScriptCreateWithoutUserScriptsInput;
}
