import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthProviders } from './o-auth-providers.enum';
import { NestedEnumOAuthProvidersFilter } from './nested-enum-o-auth-providers-filter.input';

@InputType()
export class EnumOAuthProvidersFilter {

    @Field(() => OAuthProviders, {nullable:true})
    equals?: keyof typeof OAuthProviders;

    @Field(() => [OAuthProviders], {nullable:true})
    in?: Array<keyof typeof OAuthProviders>;

    @Field(() => [OAuthProviders], {nullable:true})
    notIn?: Array<keyof typeof OAuthProviders>;

    @Field(() => NestedEnumOAuthProvidersFilter, {nullable:true})
    not?: NestedEnumOAuthProvidersFilter;
}
