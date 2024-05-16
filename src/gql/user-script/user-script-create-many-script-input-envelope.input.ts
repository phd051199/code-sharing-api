import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScriptCreateManyScriptInput } from './user-script-create-many-script.input';
import { Type } from 'class-transformer';

@InputType()
export class UserScriptCreateManyScriptInputEnvelope {

    @Field(() => [UserScriptCreateManyScriptInput], {nullable:false})
    @Type(() => UserScriptCreateManyScriptInput)
    data!: Array<UserScriptCreateManyScriptInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
