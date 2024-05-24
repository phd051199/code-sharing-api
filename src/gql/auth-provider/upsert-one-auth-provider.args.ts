import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuthProviderWhereUniqueInput } from './auth-provider-where-unique.input';
import { Type } from 'class-transformer';
import { AuthProviderCreateInput } from './auth-provider-create.input';
import { AuthProviderUpdateInput } from './auth-provider-update.input';

@ArgsType()
export class UpsertOneAuthProviderArgs {

    @Field(() => AuthProviderWhereUniqueInput, {nullable:false})
    @Type(() => AuthProviderWhereUniqueInput)
    where!: Prisma.AtLeast<AuthProviderWhereUniqueInput, 'provider_userId'>;

    @Field(() => AuthProviderCreateInput, {nullable:false})
    @Type(() => AuthProviderCreateInput)
    create!: AuthProviderCreateInput;

    @Field(() => AuthProviderUpdateInput, {nullable:false})
    @Type(() => AuthProviderUpdateInput)
    update!: AuthProviderUpdateInput;
}
