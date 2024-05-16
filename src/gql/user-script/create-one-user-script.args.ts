import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserScriptCreateInput } from './user-script-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserScriptArgs {

    @Field(() => UserScriptCreateInput, {nullable:false})
    @Type(() => UserScriptCreateInput)
    data!: UserScriptCreateInput;
}
