import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserScriptWhereInput } from './user-script-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserScriptArgs {

    @Field(() => UserScriptWhereInput, {nullable:true})
    @Type(() => UserScriptWhereInput)
    where?: UserScriptWhereInput;
}
