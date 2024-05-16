import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthProviders } from './o-auth-providers.enum';

@InputType()
export class NestedEnumOAuthProvidersFilter {

    @Field(() => OAuthProviders, {nullable:true})
    equals?: keyof typeof OAuthProviders;

    @Field(() => [OAuthProviders], {nullable:true})
    in?: Array<keyof typeof OAuthProviders>;

    @Field(() => [OAuthProviders], {nullable:true})
    notIn?: Array<keyof typeof OAuthProviders>;

    @Field(() => NestedEnumOAuthProvidersFilter, {nullable:true})
    not?: NestedEnumOAuthProvidersFilter;
}
