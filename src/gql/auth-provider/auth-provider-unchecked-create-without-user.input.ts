import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviders } from '../prisma/auth-providers.enum';

@InputType()
export class AuthProviderUncheckedCreateWithoutUserInput {

    @Field(() => AuthProviders, {nullable:false})
    provider!: keyof typeof AuthProviders;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
