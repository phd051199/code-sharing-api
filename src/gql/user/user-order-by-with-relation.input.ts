import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RoleOrderByWithRelationInput } from '../role/role-order-by-with-relation.input';
import { AuthProviderOrderByRelationAggregateInput } from '../auth-provider/auth-provider-order-by-relation-aggregate.input';
import { ScriptOrderByRelationAggregateInput } from '../script/script-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    user_name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    display_name?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    role_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    password?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    last_login?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => RoleOrderByWithRelationInput, {nullable:true})
    role?: RoleOrderByWithRelationInput;

    @Field(() => AuthProviderOrderByRelationAggregateInput, {nullable:true})
    auth_providers?: AuthProviderOrderByRelationAggregateInput;

    @Field(() => ScriptOrderByRelationAggregateInput, {nullable:true})
    scripts?: ScriptOrderByRelationAggregateInput;
}
