import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScriptCreateManyInput } from './script-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyScriptArgs {

    @Field(() => [ScriptCreateManyInput], {nullable:false})
    @Type(() => ScriptCreateManyInput)
    data!: Array<ScriptCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
