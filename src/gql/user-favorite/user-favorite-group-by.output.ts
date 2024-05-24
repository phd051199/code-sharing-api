import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserFavoriteCountAggregate } from './user-favorite-count-aggregate.output';
import { UserFavoriteAvgAggregate } from './user-favorite-avg-aggregate.output';
import { UserFavoriteSumAggregate } from './user-favorite-sum-aggregate.output';
import { UserFavoriteMinAggregate } from './user-favorite-min-aggregate.output';
import { UserFavoriteMaxAggregate } from './user-favorite-max-aggregate.output';

@ObjectType()
export class UserFavoriteGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    scriptId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
