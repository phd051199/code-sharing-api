import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScriptStatusCreateManyInput } from './script-status-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyScriptStatusArgs {

    @Field(() => [ScriptStatusCreateManyInput], {nullable:false})
    @Type(() => ScriptStatusCreateManyInput)
    data!: Array<ScriptStatusCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
