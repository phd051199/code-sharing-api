import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthProviders } from '../prisma/o-auth-providers.enum';
import { UserCreateNestedOneWithoutOauthProvidersInput } from '../user/user-create-nested-one-without-oauth-providers.input';

@InputType()
export class OAuthProviderCreateInput {

    @Field(() => OAuthProviders, {nullable:false})
    provider!: keyof typeof OAuthProviders;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutOauthProvidersInput, {nullable:false})
    user!: UserCreateNestedOneWithoutOauthProvidersInput;
}
