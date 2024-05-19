import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserScalarWhereInput {

    @Field(() => [UserScalarWhereInput], {nullable:true})
    AND?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    OR?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    NOT?: Array<UserScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    user_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    display_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avatar?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    role_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    password?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_verified?: BoolFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    last_login?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
