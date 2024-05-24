import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Category } from '../category/category.model';
import { UserFavorite } from '../user-favorite/user-favorite.model';
import { BundleDetail } from '../bundle-detail/bundle-detail.model';
import { ScriptCount } from './script-count.output';

@ObjectType()
export class Script {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    icon!: string | null;

    @Field(() => String, {nullable:true})
    path!: string | null;

    @Field(() => Int, {nullable:false})
    authorId!: number;

    @Field(() => Int, {nullable:true})
    categoryId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Category, {nullable:true})
    category?: Category | null;

    @Field(() => [UserFavorite], {nullable:true})
    userFavorite?: Array<UserFavorite>;

    @Field(() => BundleDetail, {nullable:true})
    bundleDetail?: BundleDetail | null;

    @Field(() => ScriptCount, {nullable:false})
    _count?: ScriptCount;
}
