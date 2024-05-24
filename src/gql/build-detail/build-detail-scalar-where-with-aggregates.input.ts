import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { EnumBuildStatusNullableWithAggregatesFilter } from '../prisma/enum-build-status-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BuildDetailScalarWhereWithAggregatesInput {

    @Field(() => [BuildDetailScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BuildDetailScalarWhereWithAggregatesInput>;

    @Field(() => [BuildDetailScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BuildDetailScalarWhereWithAggregatesInput>;

    @Field(() => [BuildDetailScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BuildDetailScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    script_id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    path?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    bundle?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    priority?: IntNullableWithAggregatesFilter;

    @Field(() => EnumBuildStatusNullableWithAggregatesFilter, {nullable:true})
    status?: EnumBuildStatusNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    failed_reason?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
