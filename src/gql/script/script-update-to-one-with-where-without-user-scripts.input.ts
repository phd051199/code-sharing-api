import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptWhereInput } from './script-where.input';
import { Type } from 'class-transformer';
import { ScriptUpdateWithoutUserScriptsInput } from './script-update-without-user-scripts.input';

@InputType()
export class ScriptUpdateToOneWithWhereWithoutUserScriptsInput {

    @Field(() => ScriptWhereInput, {nullable:true})
    @Type(() => ScriptWhereInput)
    where?: ScriptWhereInput;

    @Field(() => ScriptUpdateWithoutUserScriptsInput, {nullable:false})
    @Type(() => ScriptUpdateWithoutUserScriptsInput)
    data!: ScriptUpdateWithoutUserScriptsInput;
}
