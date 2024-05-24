import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildStatus } from './build-status.enum';

@InputType()
export class NestedEnumBuildStatusNullableFilter {

    @Field(() => BuildStatus, {nullable:true})
    equals?: keyof typeof BuildStatus;

    @Field(() => [BuildStatus], {nullable:true})
    in?: Array<keyof typeof BuildStatus>;

    @Field(() => [BuildStatus], {nullable:true})
    notIn?: Array<keyof typeof BuildStatus>;

    @Field(() => NestedEnumBuildStatusNullableFilter, {nullable:true})
    not?: NestedEnumBuildStatusNullableFilter;
}
