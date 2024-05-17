import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviders } from './auth-providers.enum';
import { NestedEnumAuthProvidersFilter } from './nested-enum-auth-providers-filter.input';

@InputType()
export class EnumAuthProvidersFilter {

    @Field(() => AuthProviders, {nullable:true})
    equals?: keyof typeof AuthProviders;

    @Field(() => [AuthProviders], {nullable:true})
    in?: Array<keyof typeof AuthProviders>;

    @Field(() => [AuthProviders], {nullable:true})
    notIn?: Array<keyof typeof AuthProviders>;

    @Field(() => NestedEnumAuthProvidersFilter, {nullable:true})
    not?: NestedEnumAuthProvidersFilter;
}
