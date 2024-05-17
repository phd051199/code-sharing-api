import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviders } from './auth-providers.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAuthProvidersFilter } from './nested-enum-auth-providers-filter.input';

@InputType()
export class NestedEnumAuthProvidersWithAggregatesFilter {

    @Field(() => AuthProviders, {nullable:true})
    equals?: keyof typeof AuthProviders;

    @Field(() => [AuthProviders], {nullable:true})
    in?: Array<keyof typeof AuthProviders>;

    @Field(() => [AuthProviders], {nullable:true})
    notIn?: Array<keyof typeof AuthProviders>;

    @Field(() => NestedEnumAuthProvidersWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAuthProvidersWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAuthProvidersFilter, {nullable:true})
    _min?: NestedEnumAuthProvidersFilter;

    @Field(() => NestedEnumAuthProvidersFilter, {nullable:true})
    _max?: NestedEnumAuthProvidersFilter;
}
