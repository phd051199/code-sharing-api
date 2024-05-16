import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScriptCreateManyUserInput } from './user-script-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserScriptCreateManyUserInputEnvelope {

    @Field(() => [UserScriptCreateManyUserInput], {nullable:false})
    @Type(() => UserScriptCreateManyUserInput)
    data!: Array<UserScriptCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
