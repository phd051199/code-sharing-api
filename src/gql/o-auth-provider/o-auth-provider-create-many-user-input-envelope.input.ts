import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthProviderCreateManyUserInput } from './o-auth-provider-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class OAuthProviderCreateManyUserInputEnvelope {

    @Field(() => [OAuthProviderCreateManyUserInput], {nullable:false})
    @Type(() => OAuthProviderCreateManyUserInput)
    data!: Array<OAuthProviderCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
