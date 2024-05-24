import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthProviderUpdateInput } from './auth-provider-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AuthProviderWhereUniqueInput } from './auth-provider-where-unique.input';

@ArgsType()
export class UpdateOneAuthProviderArgs {

    @Field(() => AuthProviderUpdateInput, {nullable:false})
    @Type(() => AuthProviderUpdateInput)
    data!: AuthProviderUpdateInput;

    @Field(() => AuthProviderWhereUniqueInput, {nullable:false})
    @Type(() => AuthProviderWhereUniqueInput)
    where!: Prisma.AtLeast<AuthProviderWhereUniqueInput, 'provider_userId'>;
}
