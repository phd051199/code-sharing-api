import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildStatus } from './build-status.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumBuildStatusNullableFilter } from './nested-enum-build-status-nullable-filter.input';

@InputType()
export class NestedEnumBuildStatusNullableWithAggregatesFilter {

    @Field(() => BuildStatus, {nullable:true})
    equals?: keyof typeof BuildStatus;

    @Field(() => [BuildStatus], {nullable:true})
    in?: Array<keyof typeof BuildStatus>;

    @Field(() => [BuildStatus], {nullable:true})
    notIn?: Array<keyof typeof BuildStatus>;

    @Field(() => NestedEnumBuildStatusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBuildStatusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumBuildStatusNullableFilter, {nullable:true})
    _min?: NestedEnumBuildStatusNullableFilter;

    @Field(() => NestedEnumBuildStatusNullableFilter, {nullable:true})
    _max?: NestedEnumBuildStatusNullableFilter;
}
