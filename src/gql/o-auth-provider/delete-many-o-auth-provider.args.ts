import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthProviderWhereInput } from './o-auth-provider-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyOAuthProviderArgs {

    @Field(() => OAuthProviderWhereInput, {nullable:true})
    @Type(() => OAuthProviderWhereInput)
    where?: OAuthProviderWhereInput;
}
