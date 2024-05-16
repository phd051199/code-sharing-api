import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateWithoutUserScriptsInput } from './script-create-without-user-scripts.input';
import { Type } from 'class-transformer';
import { ScriptCreateOrConnectWithoutUserScriptsInput } from './script-create-or-connect-without-user-scripts.input';
import { ScriptUpsertWithoutUserScriptsInput } from './script-upsert-without-user-scripts.input';
import { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInput } from './script-where-unique.input';
import { ScriptUpdateToOneWithWhereWithoutUserScriptsInput } from './script-update-to-one-with-where-without-user-scripts.input';

@InputType()
export class ScriptUpdateOneRequiredWithoutUserScriptsNestedInput {

    @Field(() => ScriptCreateWithoutUserScriptsInput, {nullable:true})
    @Type(() => ScriptCreateWithoutUserScriptsInput)
    create?: ScriptCreateWithoutUserScriptsInput;

    @Field(() => ScriptCreateOrConnectWithoutUserScriptsInput, {nullable:true})
    @Type(() => ScriptCreateOrConnectWithoutUserScriptsInput)
    connectOrCreate?: ScriptCreateOrConnectWithoutUserScriptsInput;

    @Field(() => ScriptUpsertWithoutUserScriptsInput, {nullable:true})
    @Type(() => ScriptUpsertWithoutUserScriptsInput)
    upsert?: ScriptUpsertWithoutUserScriptsInput;

    @Field(() => ScriptWhereUniqueInput, {nullable:true})
    @Type(() => ScriptWhereUniqueInput)
    connect?: Prisma.AtLeast<ScriptWhereUniqueInput, 'id'>;

    @Field(() => ScriptUpdateToOneWithWhereWithoutUserScriptsInput, {nullable:true})
    @Type(() => ScriptUpdateToOneWithWhereWithoutUserScriptsInput)
    update?: ScriptUpdateToOneWithWhereWithoutUserScriptsInput;
}
