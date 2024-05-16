import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OAuthProviderCreateManyInput } from './o-auth-provider-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyOAuthProviderArgs {

    @Field(() => [OAuthProviderCreateManyInput], {nullable:false})
    @Type(() => OAuthProviderCreateManyInput)
    data!: Array<OAuthProviderCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
