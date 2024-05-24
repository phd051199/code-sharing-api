import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserFavoriteWhereInput } from './user-favorite-where.input';
import { Type } from 'class-transformer';
import { UserFavoriteOrderByWithAggregationInput } from './user-favorite-order-by-with-aggregation.input';
import { UserFavoriteScalarFieldEnum } from './user-favorite-scalar-field.enum';
import { UserFavoriteScalarWhereWithAggregatesInput } from './user-favorite-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserFavoriteCountAggregateInput } from './user-favorite-count-aggregate.input';
import { UserFavoriteAvgAggregateInput } from './user-favorite-avg-aggregate.input';
import { UserFavoriteSumAggregateInput } from './user-favorite-sum-aggregate.input';
import { UserFavoriteMinAggregateInput } from './user-favorite-min-aggregate.input';
import { UserFavoriteMaxAggregateInput } from './user-favorite-max-aggregate.input';

@ArgsType()
export class UserFavoriteGroupByArgs {

    @Field(() => UserFavoriteWhereInput, {nullable:true})
    @Type(() => UserFavoriteWhereInput)
    where?: UserFavoriteWhereInput;

    @Field(() => [UserFavoriteOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserFavoriteOrderByWithAggregationInput>;

    @Field(() => [UserFavoriteScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserFavoriteScalarFieldEnum>;

    @Field(() => UserFavoriteScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserFavoriteScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserFavoriteCountAggregateInput, {nullable:true})
    _count?: UserFavoriteCountAggregateInput;

    @Field(() => UserFavoriteAvgAggregateInput, {nullable:true})
    _avg?: UserFavoriteAvgAggregateInput;

    @Field(() => UserFavoriteSumAggregateInput, {nullable:true})
    _sum?: UserFavoriteSumAggregateInput;

    @Field(() => UserFavoriteMinAggregateInput, {nullable:true})
    _min?: UserFavoriteMinAggregateInput;

    @Field(() => UserFavoriteMaxAggregateInput, {nullable:true})
    _max?: UserFavoriteMaxAggregateInput;
}
