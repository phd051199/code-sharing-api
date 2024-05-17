import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviders } from '../prisma/auth-providers.enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class AuthProviderProviderUser_idCompoundUniqueInput {

    @Field(() => AuthProviders, {nullable:false})
    provider!: keyof typeof AuthProviders;

    @Field(() => Int, {nullable:false})
    user_id!: number;
}
