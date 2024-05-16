import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserScriptUpdateManyMutationInput } from './user-script-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserScriptWhereInput } from './user-script-where.input';

@ArgsType()
export class UpdateManyUserScriptArgs {

    @Field(() => UserScriptUpdateManyMutationInput, {nullable:false})
    @Type(() => UserScriptUpdateManyMutationInput)
    data!: UserScriptUpdateManyMutationInput;

    @Field(() => UserScriptWhereInput, {nullable:true})
    @Type(() => UserScriptWhereInput)
    where?: UserScriptWhereInput;
}
