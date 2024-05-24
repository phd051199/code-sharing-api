import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ScriptRelationFilter } from '../script/script-relation-filter.input';

@InputType()
export class UserFavoriteWhereInput {

    @Field(() => [UserFavoriteWhereInput], {nullable:true})
    AND?: Array<UserFavoriteWhereInput>;

    @Field(() => [UserFavoriteWhereInput], {nullable:true})
    OR?: Array<UserFavoriteWhereInput>;

    @Field(() => [UserFavoriteWhereInput], {nullable:true})
    NOT?: Array<UserFavoriteWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => ScriptRelationFilter, {nullable:true})
    script?: ScriptRelationFilter;
}
