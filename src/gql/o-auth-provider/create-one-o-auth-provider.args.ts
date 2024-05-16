import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthProviderCreateInput } from './o-auth-provider-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneOAuthProviderArgs {

    @Field(() => OAuthProviderCreateInput, {nullable:false})
    @Type(() => OAuthProviderCreateInput)
    data!: OAuthProviderCreateInput;
}
