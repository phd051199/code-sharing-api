import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScriptStatus } from './script-status.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumScriptStatusNullableFilter } from './nested-enum-script-status-nullable-filter.input';

@InputType()
export class NestedEnumScriptStatusNullableWithAggregatesFilter {

    @Field(() => ScriptStatus, {nullable:true})
    equals?: keyof typeof ScriptStatus;

    @Field(() => [ScriptStatus], {nullable:true})
    in?: Array<keyof typeof ScriptStatus>;

    @Field(() => [ScriptStatus], {nullable:true})
    notIn?: Array<keyof typeof ScriptStatus>;

    @Field(() => NestedEnumScriptStatusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumScriptStatusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumScriptStatusNullableFilter, {nullable:true})
    _min?: NestedEnumScriptStatusNullableFilter;

    @Field(() => NestedEnumScriptStatusNullableFilter, {nullable:true})
    _max?: NestedEnumScriptStatusNullableFilter;
}
