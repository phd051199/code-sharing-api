import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthProviders } from './o-auth-providers.enum';

@InputType()
export class EnumOAuthProvidersFieldUpdateOperationsInput {

    @Field(() => OAuthProviders, {nullable:true})
    set?: keyof typeof OAuthProviders;
}
