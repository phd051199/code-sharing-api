import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { EnumBuildStatusNullableWithAggregatesFilter } from '../prisma/enum-build-status-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BundleDetailScalarWhereWithAggregatesInput {

    @Field(() => [BundleDetailScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BundleDetailScalarWhereWithAggregatesInput>;

    @Field(() => [BundleDetailScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BundleDetailScalarWhereWithAggregatesInput>;

    @Field(() => [BundleDetailScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BundleDetailScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    scriptId?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    bundlePath?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    priority?: IntNullableWithAggregatesFilter;

    @Field(() => EnumBuildStatusNullableWithAggregatesFilter, {nullable:true})
    status?: EnumBuildStatusNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    failedReason?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
