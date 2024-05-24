import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumAuthProvidersFilter } from '../prisma/enum-auth-providers-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AuthProviderScalarWhereInput {

    @Field(() => [AuthProviderScalarWhereInput], {nullable:true})
    AND?: Array<AuthProviderScalarWhereInput>;

    @Field(() => [AuthProviderScalarWhereInput], {nullable:true})
    OR?: Array<AuthProviderScalarWhereInput>;

    @Field(() => [AuthProviderScalarWhereInput], {nullable:true})
    NOT?: Array<AuthProviderScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => EnumAuthProvidersFilter, {nullable:true})
    provider?: EnumAuthProvidersFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
