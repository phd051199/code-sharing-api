import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UserFavoriteScalarWhereWithAggregatesInput {

    @Field(() => [UserFavoriteScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserFavoriteScalarWhereWithAggregatesInput>;

    @Field(() => [UserFavoriteScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserFavoriteScalarWhereWithAggregatesInput>;

    @Field(() => [UserFavoriteScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserFavoriteScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    scriptId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
