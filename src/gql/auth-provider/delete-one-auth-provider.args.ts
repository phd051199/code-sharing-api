import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuthProviderWhereUniqueInput } from './auth-provider-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneAuthProviderArgs {

    @Field(() => AuthProviderWhereUniqueInput, {nullable:false})
    @Type(() => AuthProviderWhereUniqueInput)
    where!: Prisma.AtLeast<AuthProviderWhereUniqueInput, 'provider_user_id'>;
}
