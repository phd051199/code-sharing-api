import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserFavoriteUncheckedCreateNestedManyWithoutScriptInput } from '../user-favorite/user-favorite-unchecked-create-nested-many-without-script.input';
import { BundleDetailUncheckedCreateNestedOneWithoutScriptInput } from '../bundle-detail/bundle-detail-unchecked-create-nested-one-without-script.input';

@InputType()
export class ScriptUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => String, {nullable:true})
    path?: string;

    @Field(() => Int, {nullable:false})
    authorId!: number;

    @Field(() => Int, {nullable:true})
    categoryId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserFavoriteUncheckedCreateNestedManyWithoutScriptInput, {nullable:true})
    userFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutScriptInput;

    @Field(() => BundleDetailUncheckedCreateNestedOneWithoutScriptInput, {nullable:true})
    bundleDetail?: BundleDetailUncheckedCreateNestedOneWithoutScriptInput;
}
