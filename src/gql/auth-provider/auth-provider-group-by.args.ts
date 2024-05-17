import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthProviderWhereInput } from './auth-provider-where.input';
import { Type } from 'class-transformer';
import { AuthProviderOrderByWithAggregationInput } from './auth-provider-order-by-with-aggregation.input';
import { AuthProviderScalarFieldEnum } from './auth-provider-scalar-field.enum';
import { AuthProviderScalarWhereWithAggregatesInput } from './auth-provider-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AuthProviderCountAggregateInput } from './auth-provider-count-aggregate.input';
import { AuthProviderAvgAggregateInput } from './auth-provider-avg-aggregate.input';
import { AuthProviderSumAggregateInput } from './auth-provider-sum-aggregate.input';
import { AuthProviderMinAggregateInput } from './auth-provider-min-aggregate.input';
import { AuthProviderMaxAggregateInput } from './auth-provider-max-aggregate.input';

@ArgsType()
export class AuthProviderGroupByArgs {

    @Field(() => AuthProviderWhereInput, {nullable:true})
    @Type(() => AuthProviderWhereInput)
    where?: AuthProviderWhereInput;

    @Field(() => [AuthProviderOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AuthProviderOrderByWithAggregationInput>;

    @Field(() => [AuthProviderScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AuthProviderScalarFieldEnum>;

    @Field(() => AuthProviderScalarWhereWithAggregatesInput, {nullable:true})
    having?: AuthProviderScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AuthProviderCountAggregateInput, {nullable:true})
    _count?: AuthProviderCountAggregateInput;

    @Field(() => AuthProviderAvgAggregateInput, {nullable:true})
    _avg?: AuthProviderAvgAggregateInput;

    @Field(() => AuthProviderSumAggregateInput, {nullable:true})
    _sum?: AuthProviderSumAggregateInput;

    @Field(() => AuthProviderMinAggregateInput, {nullable:true})
    _min?: AuthProviderMinAggregateInput;

    @Field(() => AuthProviderMaxAggregateInput, {nullable:true})
    _max?: AuthProviderMaxAggregateInput;
}
