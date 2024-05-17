import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviderScalarWhereInput } from './auth-provider-scalar-where.input';
import { Type } from 'class-transformer';
import { AuthProviderUpdateManyMutationInput } from './auth-provider-update-many-mutation.input';

@InputType()
export class AuthProviderUpdateManyWithWhereWithoutUserInput {

    @Field(() => AuthProviderScalarWhereInput, {nullable:false})
    @Type(() => AuthProviderScalarWhereInput)
    where!: AuthProviderScalarWhereInput;

    @Field(() => AuthProviderUpdateManyMutationInput, {nullable:false})
    @Type(() => AuthProviderUpdateManyMutationInput)
    data!: AuthProviderUpdateManyMutationInput;
}
