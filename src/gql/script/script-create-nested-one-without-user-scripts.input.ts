import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateWithoutUserScriptsInput } from './script-create-without-user-scripts.input';
import { Type } from 'class-transformer';
import { ScriptCreateOrConnectWithoutUserScriptsInput } from './script-create-or-connect-without-user-scripts.input';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';

@InputType()
export class ScriptCreateNestedOneWithoutUserScriptsInput {

    @Field(() => ScriptCreateWithoutUserScriptsInput, {nullable:true})
    @Type(() => ScriptCreateWithoutUserScriptsInput)
    create?: ScriptCreateWithoutUserScriptsInput;

    @Field(() => ScriptCreateOrConnectWithoutUserScriptsInput, {nullable:true})
    @Type(() => ScriptCreateOrConnectWithoutUserScriptsInput)
    connectOrCreate?: ScriptCreateOrConnectWithoutUserScriptsInput;

    @Field(() => ScriptWhereUniqueInput, {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    connect?: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;
}
