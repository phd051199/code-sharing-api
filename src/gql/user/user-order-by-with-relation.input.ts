import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserScriptOrderByRelationAggregateInput } from '../user-script/user-script-order-by-relation-aggregate.input';
import { OAuthProviderOrderByRelationAggregateInput } from '../o-auth-provider/o-auth-provider-order-by-relation-aggregate.input';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    password?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    lastLogin?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserScriptOrderByRelationAggregateInput, {nullable:true})
    userScripts?: UserScriptOrderByRelationAggregateInput;

    @Field(() => OAuthProviderOrderByRelationAggregateInput, {nullable:true})
    oauthProviders?: OAuthProviderOrderByRelationAggregateInput;

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    profile?: ProfileOrderByWithRelationInput;
}
