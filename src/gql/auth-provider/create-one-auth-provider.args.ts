import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthProviderCreateInput } from './auth-provider-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAuthProviderArgs {

    @Field(() => AuthProviderCreateInput, {nullable:false})
    @Type(() => AuthProviderCreateInput)
    data!: AuthProviderCreateInput;
}
