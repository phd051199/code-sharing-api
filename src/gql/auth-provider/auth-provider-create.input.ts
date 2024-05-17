import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviders } from '../prisma/auth-providers.enum';
import { UserCreateNestedOneWithoutAuth_providersInput } from '../user/user-create-nested-one-without-auth-providers.input';

@InputType()
export class AuthProviderCreateInput {

    @Field(() => AuthProviders, {nullable:false})
    provider!: keyof typeof AuthProviders;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => UserCreateNestedOneWithoutAuth_providersInput, {nullable:false})
    user!: UserCreateNestedOneWithoutAuth_providersInput;
}
