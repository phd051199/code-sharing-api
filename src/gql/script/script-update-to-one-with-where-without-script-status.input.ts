import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptWhereInput } from './script-where.input';
import { Type } from 'class-transformer';
import { ScriptUpdateWithoutScript_statusInput } from './script-update-without-script-status.input';

@InputType()
export class ScriptUpdateToOneWithWhereWithoutScript_statusInput {

    @Field(() => ScriptWhereInput, {nullable:true})
    @Type(() => ScriptWhereInput)
    where?: ScriptWhereInput;

    @Field(() => ScriptUpdateWithoutScript_statusInput, {nullable:false})
    @Type(() => ScriptUpdateWithoutScript_statusInput)
    data!: ScriptUpdateWithoutScript_statusInput;
}
