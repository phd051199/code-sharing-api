import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildStatus } from './build-status.enum';
import { NestedEnumBuildStatusNullableFilter } from './nested-enum-build-status-nullable-filter.input';

@InputType()
export class EnumBuildStatusNullableFilter {

    @Field(() => BuildStatus, {nullable:true})
    equals?: keyof typeof BuildStatus;

    @Field(() => [BuildStatus], {nullable:true})
    in?: Array<keyof typeof BuildStatus>;

    @Field(() => [BuildStatus], {nullable:true})
    notIn?: Array<keyof typeof BuildStatus>;

    @Field(() => NestedEnumBuildStatusNullableFilter, {nullable:true})
    not?: NestedEnumBuildStatusNullableFilter;
}
