import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumBuildStatusNullableFilter } from '../prisma/enum-build-status-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ScriptStatusScalarWhereInput {

    @Field(() => [ScriptStatusScalarWhereInput], {nullable:true})
    AND?: Array<ScriptStatusScalarWhereInput>;

    @Field(() => [ScriptStatusScalarWhereInput], {nullable:true})
    OR?: Array<ScriptStatusScalarWhereInput>;

    @Field(() => [ScriptStatusScalarWhereInput], {nullable:true})
    NOT?: Array<ScriptStatusScalarWhereInput>;

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
}
