import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OAuthProviderWhereUniqueInput } from './o-auth-provider-where-unique.input';
import { Type } from 'class-transformer';
import { OAuthProviderUpdateWithoutUserInput } from './o-auth-provider-update-without-user.input';

@InputType()
export class OAuthProviderUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => OAuthProviderWhereUniqueInput, {nullable:false})
    @Type(() => OAuthProviderWhereUniqueInput)
    where!: Prisma.AtLeast<OAuthProviderWhereUniqueInput, 'provider_userId'>;

    @Field(() => OAuthProviderUpdateWithoutUserInput, {nullable:false})
    @Type(() => OAuthProviderUpdateWithoutUserInput)
    data!: OAuthProviderUpdateWithoutUserInput;
}
