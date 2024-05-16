import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthProviders } from './o-auth-providers.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumOAuthProvidersFilter } from './nested-enum-o-auth-providers-filter.input';

@InputType()
export class NestedEnumOAuthProvidersWithAggregatesFilter {

    @Field(() => OAuthProviders, {nullable:true})
    equals?: keyof typeof OAuthProviders;

    @Field(() => [OAuthProviders], {nullable:true})
    in?: Array<keyof typeof OAuthProviders>;

    @Field(() => [OAuthProviders], {nullable:true})
    notIn?: Array<keyof typeof OAuthProviders>;

    @Field(() => NestedEnumOAuthProvidersWithAggregatesFilter, {nullable:true})
    not?: NestedEnumOAuthProvidersWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumOAuthProvidersFilter, {nullable:true})
    _min?: NestedEnumOAuthProvidersFilter;

    @Field(() => NestedEnumOAuthProvidersFilter, {nullable:true})
    _max?: NestedEnumOAuthProvidersFilter;
}
