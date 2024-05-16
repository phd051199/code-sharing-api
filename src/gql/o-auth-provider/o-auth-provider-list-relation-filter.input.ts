import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthProviderWhereInput } from './o-auth-provider-where.input';

@InputType()
export class OAuthProviderListRelationFilter {

    @Field(() => OAuthProviderWhereInput, {nullable:true})
    every?: OAuthProviderWhereInput;

    @Field(() => OAuthProviderWhereInput, {nullable:true})
    some?: OAuthProviderWhereInput;

    @Field(() => OAuthProviderWhereInput, {nullable:true})
    none?: OAuthProviderWhereInput;
}
