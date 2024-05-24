import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserFavoriteWhereInput } from './user-favorite-where.input';
import { Type } from 'class-transformer';
import { UserFavoriteOrderByWithRelationInput } from './user-favorite-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserFavoriteWhereUniqueInput } from './user-favorite-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserFavoriteCountAggregateInput } from './user-favorite-count-aggregate.input';
import { UserFavoriteAvgAggregateInput } from './user-favorite-avg-aggregate.input';
import { UserFavoriteSumAggregateInput } from './user-favorite-sum-aggregate.input';
import { UserFavoriteMinAggregateInput } from './user-favorite-min-aggregate.input';
import { UserFavoriteMaxAggregateInput } from './user-favorite-max-aggregate.input';

@ArgsType()
export class UserFavoriteAggregateArgs {

    @Field(() => UserFavoriteWhereInput, {nullable:true})
    @Type(() => UserFavoriteWhereInput)
    where?: UserFavoriteWhereInput;

    @Field(() => [UserFavoriteOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserFavoriteOrderByWithRelationInput>;

    @Field(() => UserFavoriteWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserFavoriteWhereUniqueInput, 'id' | 'userId_scriptId'>;

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
