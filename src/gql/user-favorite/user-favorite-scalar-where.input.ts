import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserFavoriteScalarWhereInput {

    @Field(() => [UserFavoriteScalarWhereInput], {nullable:true})
    AND?: Array<UserFavoriteScalarWhereInput>;

    @Field(() => [UserFavoriteScalarWhereInput], {nullable:true})
    OR?: Array<UserFavoriteScalarWhereInput>;

    @Field(() => [UserFavoriteScalarWhereInput], {nullable:true})
    NOT?: Array<UserFavoriteScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    scriptId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
