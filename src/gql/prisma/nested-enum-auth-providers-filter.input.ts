import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviders } from './auth-providers.enum';

@InputType()
export class NestedEnumAuthProvidersFilter {

    @Field(() => AuthProviders, {nullable:true})
    equals?: keyof typeof AuthProviders;

    @Field(() => [AuthProviders], {nullable:true})
    in?: Array<keyof typeof AuthProviders>;

    @Field(() => [AuthProviders], {nullable:true})
    notIn?: Array<keyof typeof AuthProviders>;

    @Field(() => NestedEnumAuthProvidersFilter, {nullable:true})
    not?: NestedEnumAuthProvidersFilter;
}
