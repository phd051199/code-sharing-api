import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviderCreateManyUserInput } from './auth-provider-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class AuthProviderCreateManyUserInputEnvelope {

    @Field(() => [AuthProviderCreateManyUserInput], {nullable:false})
    @Type(() => AuthProviderCreateManyUserInput)
    data!: Array<AuthProviderCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
