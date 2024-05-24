import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumAuthProvidersFilter } from '../prisma/enum-auth-providers-filter.input';
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

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => EnumAuthProvidersFilter, {nullable:true})
    provider?: EnumAuthProvidersFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
