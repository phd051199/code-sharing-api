import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScriptUpdateManyMutationInput } from './script-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ScriptWhereInput } from './script-where.input';

@ArgsType()
export class UpdateManyScriptArgs {

    @Field(() => ScriptUpdateManyMutationInput, {nullable:false})
    @Type(() => ScriptUpdateManyMutationInput)
    data!: ScriptUpdateManyMutationInput;

    @Field(() => ScriptWhereInput, {nullable:true})
    @Type(() => ScriptWhereInput)
    where?: ScriptWhereInput;
}
