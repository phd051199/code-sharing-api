import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScriptStatusUpdateManyMutationInput } from './script-status-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ScriptStatusWhereInput } from './script-status-where.input';

@ArgsType()
export class UpdateManyScriptStatusArgs {

    @Field(() => ScriptStatusUpdateManyMutationInput, {nullable:false})
    @Type(() => ScriptStatusUpdateManyMutationInput)
    data!: ScriptStatusUpdateManyMutationInput;

    @Field(() => ScriptStatusWhereInput, {nullable:true})
    @Type(() => ScriptStatusWhereInput)
    where?: ScriptStatusWhereInput;
}
