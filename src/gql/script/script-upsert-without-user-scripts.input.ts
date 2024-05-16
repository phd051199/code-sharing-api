import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptUpdateWithoutUserScriptsInput } from './script-update-without-user-scripts.input';
import { Type } from 'class-transformer';
import { ScriptCreateWithoutUserScriptsInput } from './script-create-without-user-scripts.input';
import { ScriptWhereInput } from './script-where.input';

@InputType()
export class ScriptUpsertWithoutUserScriptsInput {

    @Field(() => ScriptUpdateWithoutUserScriptsInput, {nullable:false})
    @Type(() => ScriptUpdateWithoutUserScriptsInput)
    update!: ScriptUpdateWithoutUserScriptsInput;

    @Field(() => ScriptCreateWithoutUserScriptsInput, {nullable:false})
    @Type(() => ScriptCreateWithoutUserScriptsInput)
    create!: ScriptCreateWithoutUserScriptsInput;

    @Field(() => ScriptWhereInput, {nullable:true})
    @Type(() => ScriptWhereInput)
    where?: ScriptWhereInput;
}
