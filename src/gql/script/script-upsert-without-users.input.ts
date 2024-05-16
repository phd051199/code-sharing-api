import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptUpdateWithoutUsersInput } from './script-update-without-users.input';
import { Type } from 'class-transformer';
import { ScriptCreateWithoutUsersInput } from './script-create-without-users.input';
import { ScriptWhereInput } from './script-where.input';

@InputType()
export class ScriptUpsertWithoutUsersInput {

    @Field(() => ScriptUpdateWithoutUsersInput, {nullable:false})
    @Type(() => ScriptUpdateWithoutUsersInput)
    update!: ScriptUpdateWithoutUsersInput;

    @Field(() => ScriptCreateWithoutUsersInput, {nullable:false})
    @Type(() => ScriptCreateWithoutUsersInput)
    create!: ScriptCreateWithoutUsersInput;

    @Field(() => ScriptWhereInput, {nullable:true})
    @Type(() => ScriptWhereInput)
    where?: ScriptWhereInput;
}
