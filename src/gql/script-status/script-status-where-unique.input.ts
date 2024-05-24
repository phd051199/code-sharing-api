import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ScriptStatusWhereInput } from './script-status-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumBuildStatusNullableFilter } from '../prisma/enum-build-status-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ScriptRelationFilter } from '../script/script-relation-filter.input';

@InputType()
export class ScriptStatusWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    script_id?: number;

    @Field(() => [ScriptStatusWhereInput], {nullable:true})
    AND?: Array<ScriptStatusWhereInput>;

    @Field(() => [ScriptStatusWhereInput], {nullable:true})
    OR?: Array<ScriptStatusWhereInput>;

    @Field(() => [ScriptStatusWhereInput], {nullable:true})
    NOT?: Array<ScriptStatusWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    path?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bundle?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    priority?: IntNullableFilter;

    @Field(() => EnumBuildStatusNullableFilter, {nullable:true})
    status?: EnumBuildStatusNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    failed_reason?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => ScriptRelationFilter, {nullable:true})
    script?: ScriptRelationFilter;
}
