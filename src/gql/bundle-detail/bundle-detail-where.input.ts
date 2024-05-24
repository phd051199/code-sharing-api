import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumBuildStatusNullableFilter } from '../prisma/enum-build-status-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ScriptRelationFilter } from '../script/script-relation-filter.input';

@InputType()
export class BundleDetailWhereInput {

    @Field(() => [BundleDetailWhereInput], {nullable:true})
    AND?: Array<BundleDetailWhereInput>;

    @Field(() => [BundleDetailWhereInput], {nullable:true})
    OR?: Array<BundleDetailWhereInput>;

    @Field(() => [BundleDetailWhereInput], {nullable:true})
    NOT?: Array<BundleDetailWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    scriptId?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bundlePath?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    priority?: IntNullableFilter;

    @Field(() => EnumBuildStatusNullableFilter, {nullable:true})
    status?: EnumBuildStatusNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    failedReason?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ScriptRelationFilter, {nullable:true})
    script?: ScriptRelationFilter;
}
