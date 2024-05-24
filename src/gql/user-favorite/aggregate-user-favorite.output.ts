import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserFavoriteCountAggregate } from './user-favorite-count-aggregate.output';
import { UserFavoriteAvgAggregate } from './user-favorite-avg-aggregate.output';
import { UserFavoriteSumAggregate } from './user-favorite-sum-aggregate.output';
import { UserFavoriteMinAggregate } from './user-favorite-min-aggregate.output';
import { UserFavoriteMaxAggregate } from './user-favorite-max-aggregate.output';

@ObjectType()
export class AggregateUserFavorite {

    @Field(() => UserFavoriteCountAggregate, {nullable:true})
    _count?: UserFavoriteCountAggregate;

    @Field(() => UserFavoriteAvgAggregate, {nullable:true})
    _avg?: UserFavoriteAvgAggregate;

    @Field(() => UserFavoriteSumAggregate, {nullable:true})
    _sum?: UserFavoriteSumAggregate;

    @Field(() => UserFavoriteMinAggregate, {nullable:true})
    _min?: UserFavoriteMinAggregate;

    @Field(() => UserFavoriteMaxAggregate, {nullable:true})
    _max?: UserFavoriteMaxAggregate;
}
