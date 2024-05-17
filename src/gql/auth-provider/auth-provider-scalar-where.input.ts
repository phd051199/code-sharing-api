import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumAuthProvidersFilter } from '../prisma/enum-auth-providers-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AuthProviderScalarWhereInput {

    @Field(() => [AuthProviderScalarWhereInput], {nullable:true})
    AND?: Array<AuthProviderScalarWhereInput>;

    @Field(() => [AuthProviderScalarWhereInput], {nullable:true})
    OR?: Array<AuthProviderScalarWhereInput>;

    @Field(() => [AuthProviderScalarWhereInput], {nullable:true})
    NOT?: Array<AuthProviderScalarWhereInput>;

    @Field(() => EnumAuthProvidersFilter, {nullable:true})
    provider?: EnumAuthProvidersFilter;

    @Field(() => IntFilter, {nullable:true})
    user_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
