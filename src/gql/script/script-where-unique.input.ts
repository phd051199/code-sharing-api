import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ScriptWhereInput } from './script-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScriptListRelationFilter } from '../user-script/user-script-list-relation-filter.input';

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

    @Field(() => StringFilter, {nullable:true})
    path?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserScriptListRelationFilter, {nullable:true})
    userScripts?: UserScriptListRelationFilter;
}
