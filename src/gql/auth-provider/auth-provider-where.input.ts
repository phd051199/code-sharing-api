import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumAuthProvidersFilter } from '../prisma/enum-auth-providers-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class AuthProviderWhereInput {

    @Field(() => [AuthProviderWhereInput], {nullable:true})
    AND?: Array<AuthProviderWhereInput>;

    @Field(() => [AuthProviderWhereInput], {nullable:true})
    OR?: Array<AuthProviderWhereInput>;

    @Field(() => [AuthProviderWhereInput], {nullable:true})
    NOT?: Array<AuthProviderWhereInput>;

    @Field(() => EnumAuthProvidersFilter, {nullable:true})
    provider?: EnumAuthProvidersFilter;

    @Field(() => IntFilter, {nullable:true})
    user_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
