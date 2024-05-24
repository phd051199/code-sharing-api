import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptScalarWhereInput } from './script-scalar-where.input';
import { Type } from 'class-transformer';
import { ScriptUpdateManyMutationInput } from './script-update-many-mutation.input';

@InputType()
export class ScriptUpdateManyWithWhereWithoutCategoryInput {

    @Field(() => ScriptScalarWhereInput, {nullable:false})
    @Type(() => ScriptScalarWhereInput)
    where!: ScriptScalarWhereInput;

    @Field(() => ScriptUpdateManyMutationInput, {nullable:false})
    @Type(() => ScriptUpdateManyMutationInput)
    data!: ScriptUpdateManyMutationInput;
}
