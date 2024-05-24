import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthProviderWhereInput } from './auth-provider-where.input';
import { Type } from 'class-transformer';
import { AuthProviderOrderByWithRelationInput } from './auth-provider-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AuthProviderWhereUniqueInput } from './auth-provider-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AuthProviderScalarFieldEnum } from './auth-provider-scalar-field.enum';

@ArgsType()
export class FindFirstAuthProviderArgs {

    @Field(() => AuthProviderWhereInput, {nullable:true})
    @Type(() => AuthProviderWhereInput)
    where?: AuthProviderWhereInput;

    @Field(() => [AuthProviderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AuthProviderOrderByWithRelationInput>;

    @Field(() => AuthProviderWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AuthProviderWhereUniqueInput, 'provider_userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AuthProviderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AuthProviderScalarFieldEnum>;
}
