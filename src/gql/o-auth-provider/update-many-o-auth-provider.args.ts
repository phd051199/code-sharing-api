import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthProviderUpdateManyMutationInput } from './o-auth-provider-update-many-mutation.input';
import { Type } from 'class-transformer';
import { OAuthProviderWhereInput } from './o-auth-provider-where.input';

@ArgsType()
export class UpdateManyOAuthProviderArgs {

    @Field(() => OAuthProviderUpdateManyMutationInput, {nullable:false})
    @Type(() => OAuthProviderUpdateManyMutationInput)
    data!: OAuthProviderUpdateManyMutationInput;

    @Field(() => OAuthProviderWhereInput, {nullable:true})
    @Type(() => OAuthProviderWhereInput)
    where?: OAuthProviderWhereInput;
}
