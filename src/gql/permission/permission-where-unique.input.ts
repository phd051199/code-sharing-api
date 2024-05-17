import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermissionRole_idActionCompoundUniqueInput } from './permission-role-id-action-compound-unique.input';
import { PermissionWhereInput } from './permission-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumActionFilter } from '../prisma/enum-action-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';

@InputType()
export class PermissionWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => PermissionRole_idActionCompoundUniqueInput, {nullable:true})
    role_id_action?: PermissionRole_idActionCompoundUniqueInput;

    @Field(() => [PermissionWhereInput], {nullable:true})
    AND?: Array<PermissionWhereInput>;

    @Field(() => [PermissionWhereInput], {nullable:true})
    OR?: Array<PermissionWhereInput>;

    @Field(() => [PermissionWhereInput], {nullable:true})
    NOT?: Array<PermissionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    role_id?: IntFilter;

    @Field(() => EnumActionFilter, {nullable:true})
    action?: EnumActionFilter;

    @Field(() => StringFilter, {nullable:true})
    subject?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    inverted?: BoolFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    conditions?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    reason?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;

    @Field(() => RoleRelationFilter, {nullable:true})
    role?: RoleRelationFilter;
}
