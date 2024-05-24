import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AuthProviders } from '../prisma/auth-providers.enum';

@InputType()
export class AuthProviderUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => AuthProviders, {nullable:false})
    provider!: keyof typeof AuthProviders;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
