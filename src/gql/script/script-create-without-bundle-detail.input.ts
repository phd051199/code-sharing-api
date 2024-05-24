import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutScriptsInput } from '../user/user-create-nested-one-without-scripts.input';
import { CategoryCreateNestedOneWithoutScriptsInput } from '../category/category-create-nested-one-without-scripts.input';
import { UserFavoriteCreateNestedManyWithoutScriptInput } from '../user-favorite/user-favorite-create-nested-many-without-script.input';

@InputType()
export class ScriptCreateWithoutBundleDetailInput {

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

    @Field(() => UserFavoriteCreateNestedManyWithoutScriptInput, {nullable:true})
    userFavorite?: UserFavoriteCreateNestedManyWithoutScriptInput;
}
