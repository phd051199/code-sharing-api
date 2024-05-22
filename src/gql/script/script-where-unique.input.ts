import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ScriptWhereInput } from './script-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumScriptStatusNullableFilter } from '../prisma/enum-script-status-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class ScriptWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ScriptWhereInput], {nullable:true})
    AND?: Array<ScriptWhereInput>;

    @Field(() => [ScriptWhereInput], {nullable:true})
    OR?: Array<ScriptWhereInput>;

    @Field(() => [ScriptWhereInput], {nullable:true})
    NOT?: Array<ScriptWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    path?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bundle?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    user_id?: IntFilter;

    @Field(() => EnumScriptStatusNullableFilter, {nullable:true})
    status?: EnumScriptStatusNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    failed_reason?: StringNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
