import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScriptScalarWhereInput } from './user-script-scalar-where.input';
import { Type } from 'class-transformer';
import { UserScriptUpdateManyMutationInput } from './user-script-update-many-mutation.input';

@InputType()
export class UserScriptUpdateManyWithWhereWithoutScriptInput {

    @Field(() => UserScriptScalarWhereInput, {nullable:false})
    @Type(() => UserScriptScalarWhereInput)
    where!: UserScriptScalarWhereInput;

    @Field(() => UserScriptUpdateManyMutationInput, {nullable:false})
    @Type(() => UserScriptUpdateManyMutationInput)
    data!: UserScriptUpdateManyMutationInput;
}
