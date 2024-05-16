import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OAuthProviderScalarWhereInput } from './o-auth-provider-scalar-where.input';
import { Type } from 'class-transformer';
import { OAuthProviderUpdateManyMutationInput } from './o-auth-provider-update-many-mutation.input';

@InputType()
export class OAuthProviderUpdateManyWithWhereWithoutUserInput {

    @Field(() => OAuthProviderScalarWhereInput, {nullable:false})
    @Type(() => OAuthProviderScalarWhereInput)
    where!: OAuthProviderScalarWhereInput;

    @Field(() => OAuthProviderUpdateManyMutationInput, {nullable:false})
    @Type(() => OAuthProviderUpdateManyMutationInput)
    data!: OAuthProviderUpdateManyMutationInput;
}
