import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviders } from '../prisma/auth-providers.enum';
import { UserCreateNestedOneWithoutAuthProvidersInput } from '../user/user-create-nested-one-without-auth-providers.input';

@InputType()
export class AuthProviderCreateInput {

    @Field(() => AuthProviders, {nullable:false})
    provider!: keyof typeof AuthProviders;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutAuthProvidersInput, {nullable:false})
    user!: UserCreateNestedOneWithoutAuthProvidersInput;
}
