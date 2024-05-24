import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ScriptWhereInput } from './script-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { CategoryNullableRelationFilter } from '../category/category-nullable-relation-filter.input';
import { UserFavoriteListRelationFilter } from '../user-favorite/user-favorite-list-relation-filter.input';
import { BundleDetailNullableRelationFilter } from '../bundle-detail/bundle-detail-nullable-relation-filter.input';

@InputType()
export class ScriptWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ScriptWhereInput], {nullable:true})
    AND?: Array<ScriptWhereInput>;

    @Field(() => [ScriptWhereInput], {nullable:true})
    OR?: Array<ScriptWhereInput>;

    @Field(() => [ScriptWhereInput], {nullable:true})
    NOT?: Array<ScriptWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    icon?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    path?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    authorId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    categoryId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => CategoryNullableRelationFilter, {nullable:true})
    category?: CategoryNullableRelationFilter;

    @Field(() => UserFavoriteListRelationFilter, {nullable:true})
    userFavorite?: UserFavoriteListRelationFilter;

    @Field(() => BundleDetailNullableRelationFilter, {nullable:true})
    bundleDetail?: BundleDetailNullableRelationFilter;
}
