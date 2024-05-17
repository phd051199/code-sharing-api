import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptCreateManyUserInput } from './script-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ScriptCreateManyUserInputEnvelope {

    @Field(() => [ScriptCreateManyUserInput], {nullable:false})
    @Type(() => ScriptCreateManyUserInput)
    data!: Array<ScriptCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
