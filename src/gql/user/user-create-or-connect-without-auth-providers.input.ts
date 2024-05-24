import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAuthProvidersInput } from './user-create-without-auth-providers.input';

@InputType()
export class UserCreateOrConnectWithoutAuthProvidersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutAuthProvidersInput, {nullable:false})
    @Type(() => UserCreateWithoutAuthProvidersInput)
    create!: UserCreateWithoutAuthProvidersInput;
}
