import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';
import { AuthProviderListRelationFilter } from '../auth-provider/auth-provider-list-relation-filter.input';
import { ScriptListRelationFilter } from '../script/script-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

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

    @Field(() => RoleRelationFilter, {nullable:true})
    role?: RoleRelationFilter;

    @Field(() => AuthProviderListRelationFilter, {nullable:true})
    auth_providers?: AuthProviderListRelationFilter;

    @Field(() => ScriptListRelationFilter, {nullable:true})
    scripts?: ScriptListRelationFilter;
}
