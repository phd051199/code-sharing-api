import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptStatusScalarWhereInput } from './script-status-scalar-where.input';
import { Type } from 'class-transformer';
import { ScriptStatusUpdateManyMutationInput } from './script-status-update-many-mutation.input';

@InputType()
export class ScriptStatusUpdateManyWithWhereWithoutScriptInput {

    @Field(() => ScriptStatusScalarWhereInput, {nullable:false})
    @Type(() => ScriptStatusScalarWhereInput)
    where!: ScriptStatusScalarWhereInput;

    @Field(() => ScriptStatusUpdateManyMutationInput, {nullable:false})
    @Type(() => ScriptStatusUpdateManyMutationInput)
    data!: ScriptStatusUpdateManyMutationInput;
}
