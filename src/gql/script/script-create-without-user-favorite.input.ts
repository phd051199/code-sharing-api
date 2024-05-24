import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutScriptsInput } from '../user/user-create-nested-one-without-scripts.input';
import { CategoryCreateNestedOneWithoutScriptsInput } from '../category/category-create-nested-one-without-scripts.input';
import { BundleDetailCreateNestedOneWithoutScriptInput } from '../bundle-detail/bundle-detail-create-nested-one-without-script.input';

@InputType()
export class ScriptCreateWithoutUserFavoriteInput {

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

    @Field(() => CategoryCreateNestedOneWithoutScriptsInput, {nullable:true})
    category?: CategoryCreateNestedOneWithoutScriptsInput;

    @Field(() => BundleDetailCreateNestedOneWithoutScriptInput, {nullable:true})
    bundleDetail?: BundleDetailCreateNestedOneWithoutScriptInput;
}
