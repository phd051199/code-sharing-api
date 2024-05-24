import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptUpdateWithoutScript_statusInput } from './script-update-without-script-status.input';
import { Type } from 'class-transformer';
import { ScriptCreateWithoutScript_statusInput } from './script-create-without-script-status.input';
import { ScriptWhereInput } from './script-where.input';

@InputType()
export class ScriptUpsertWithoutScript_statusInput {

    @Field(() => ScriptUpdateWithoutScript_statusInput, {nullable:false})
    @Type(() => ScriptUpdateWithoutScript_statusInput)
    update!: ScriptUpdateWithoutScript_statusInput;

    @Field(() => ScriptCreateWithoutScript_statusInput, {nullable:false})
    @Type(() => ScriptCreateWithoutScript_statusInput)
    create!: ScriptCreateWithoutScript_statusInput;

    @Field(() => ScriptWhereInput, {nullable:true})
    @Type(() => ScriptWhereInput)
    where?: ScriptWhereInput;
}
