import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumScriptStatusNullableWithAggregatesFilter } from '../prisma/enum-script-status-nullable-with-aggregates-filter.input';

@InputType()
export class ScriptScalarWhereWithAggregatesInput {

    @Field(() => [ScriptScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ScriptScalarWhereWithAggregatesInput>;

    @Field(() => [ScriptScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ScriptScalarWhereWithAggregatesInput>;

    @Field(() => [ScriptScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ScriptScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    path?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    bundle?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    user_id?: IntWithAggregatesFilter;

    @Field(() => EnumScriptStatusNullableWithAggregatesFilter, {nullable:true})
    status?: EnumScriptStatusNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    failed_reason?: StringNullableWithAggregatesFilter;
}
