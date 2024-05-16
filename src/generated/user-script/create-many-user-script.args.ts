import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserScriptCreateManyInput } from './user-script-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserScriptArgs {

    @Field(() => [UserScriptCreateManyInput], {nullable:false})
    @Type(() => UserScriptCreateManyInput)
    data!: Array<UserScriptCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
