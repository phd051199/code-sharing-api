import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RoleOrderByWithRelationInput } from '../role/role-order-by-with-relation.input';
import { AuthProviderOrderByRelationAggregateInput } from '../auth-provider/auth-provider-order-by-relation-aggregate.input';
import { ScriptOrderByRelationAggregateInput } from '../script/script-order-by-relation-aggregate.input';
import { UserFavoriteOrderByRelationAggregateInput } from '../user-favorite/user-favorite-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    displayName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    avatar?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    roleId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    password?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isVerified?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    lastLogin?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => RoleOrderByWithRelationInput, {nullable:true})
    role?: RoleOrderByWithRelationInput;

    @Field(() => AuthProviderOrderByRelationAggregateInput, {nullable:true})
    authProviders?: AuthProviderOrderByRelationAggregateInput;

    @Field(() => ScriptOrderByRelationAggregateInput, {nullable:true})
    scripts?: ScriptOrderByRelationAggregateInput;

    @Field(() => UserFavoriteOrderByRelationAggregateInput, {nullable:true})
    userFavorite?: UserFavoriteOrderByRelationAggregateInput;
}
