import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumBuildStatusNullableFilter } from '../prisma/enum-build-status-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ScriptRelationFilter } from '../script/script-relation-filter.input';

@InputType()
export class ScriptStatusWhereInput {

    @Field(() => [ScriptStatusWhereInput], {nullable:true})
    AND?: Array<ScriptStatusWhereInput>;

    @Field(() => [ScriptStatusWhereInput], {nullable:true})
    OR?: Array<ScriptStatusWhereInput>;

    @Field(() => [ScriptStatusWhereInput], {nullable:true})
    NOT?: Array<ScriptStatusWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    script_id?: IntFilter;

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
