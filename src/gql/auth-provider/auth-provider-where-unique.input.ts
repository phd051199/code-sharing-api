import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviderProviderUser_idCompoundUniqueInput } from './auth-provider-provider-user-id-compound-unique.input';
import { AuthProviderWhereInput } from './auth-provider-where.input';
import { EnumAuthProvidersFilter } from '../prisma/enum-auth-providers-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class AuthProviderWhereUniqueInput {

    @Field(() => AuthProviderProviderUser_idCompoundUniqueInput, {nullable:true})
    provider_user_id?: AuthProviderProviderUser_idCompoundUniqueInput;

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
