import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthProviderUpdateManyMutationInput } from './auth-provider-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AuthProviderWhereInput } from './auth-provider-where.input';

@ArgsType()
export class UpdateManyAuthProviderArgs {

    @Field(() => AuthProviderUpdateManyMutationInput, {nullable:false})
    @Type(() => AuthProviderUpdateManyMutationInput)
    data!: AuthProviderUpdateManyMutationInput;

    @Field(() => AuthProviderWhereInput, {nullable:true})
    @Type(() => AuthProviderWhereInput)
    where?: AuthProviderWhereInput;
}
