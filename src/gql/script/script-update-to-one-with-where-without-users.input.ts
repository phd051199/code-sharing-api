import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptWhereInput } from './script-where.input';
import { Type } from 'class-transformer';
import { ScriptUpdateWithoutUsersInput } from './script-update-without-users.input';

@InputType()
export class ScriptUpdateToOneWithWhereWithoutUsersInput {

    @Field(() => ScriptWhereInput, {nullable:true})
    @Type(() => ScriptWhereInput)
    where?: ScriptWhereInput;

    @Field(() => ScriptUpdateWithoutUsersInput, {nullable:false})
    @Type(() => ScriptUpdateWithoutUsersInput)
    data!: ScriptUpdateWithoutUsersInput;
}
