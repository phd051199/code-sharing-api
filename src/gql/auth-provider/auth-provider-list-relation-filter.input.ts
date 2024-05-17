import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviderWhereInput } from './auth-provider-where.input';

@InputType()
export class AuthProviderListRelationFilter {

    @Field(() => AuthProviderWhereInput, {nullable:true})
    every?: AuthProviderWhereInput;

    @Field(() => AuthProviderWhereInput, {nullable:true})
    some?: AuthProviderWhereInput;

    @Field(() => AuthProviderWhereInput, {nullable:true})
    none?: AuthProviderWhereInput;
}
