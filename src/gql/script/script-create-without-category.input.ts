import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutScriptsInput } from '../user/user-create-nested-one-without-scripts.input';
import { UserFavoriteCreateNestedManyWithoutScriptInput } from '../user-favorite/user-favorite-create-nested-many-without-script.input';
import { BundleDetailCreateNestedOneWithoutScriptInput } from '../bundle-detail/bundle-detail-create-nested-one-without-script.input';

@InputType()
export class ScriptCreateWithoutCategoryInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => String, {nullable:true})
    path?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutScriptsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutScriptsInput;

    @Field(() => UserFavoriteCreateNestedManyWithoutScriptInput, {nullable:true})
    userFavorite?: UserFavoriteCreateNestedManyWithoutScriptInput;

    @Field(() => BundleDetailCreateNestedOneWithoutScriptInput, {nullable:true})
    bundleDetail?: BundleDetailCreateNestedOneWithoutScriptInput;
}
