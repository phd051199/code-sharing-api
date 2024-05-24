import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserFavoriteCountOrderByAggregateInput } from './user-favorite-count-order-by-aggregate.input';
import { UserFavoriteAvgOrderByAggregateInput } from './user-favorite-avg-order-by-aggregate.input';
import { UserFavoriteMaxOrderByAggregateInput } from './user-favorite-max-order-by-aggregate.input';
import { UserFavoriteMinOrderByAggregateInput } from './user-favorite-min-order-by-aggregate.input';
import { UserFavoriteSumOrderByAggregateInput } from './user-favorite-sum-order-by-aggregate.input';

@InputType()
export class UserFavoriteOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    scriptId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserFavoriteCountOrderByAggregateInput, {nullable:true})
    _count?: UserFavoriteCountOrderByAggregateInput;

    @Field(() => UserFavoriteAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserFavoriteAvgOrderByAggregateInput;

    @Field(() => UserFavoriteMaxOrderByAggregateInput, {nullable:true})
    _max?: UserFavoriteMaxOrderByAggregateInput;

    @Field(() => UserFavoriteMinOrderByAggregateInput, {nullable:true})
    _min?: UserFavoriteMinOrderByAggregateInput;

    @Field(() => UserFavoriteSumOrderByAggregateInput, {nullable:true})
    _sum?: UserFavoriteSumOrderByAggregateInput;
}
