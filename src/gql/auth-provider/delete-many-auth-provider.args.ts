import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthProviderWhereInput } from './auth-provider-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAuthProviderArgs {

    @Field(() => AuthProviderWhereInput, {nullable:true})
    @Type(() => AuthProviderWhereInput)
    where?: AuthProviderWhereInput;
}
