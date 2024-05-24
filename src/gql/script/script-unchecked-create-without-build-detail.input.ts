import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserFavoriteUncheckedCreateNestedManyWithoutScriptInput } from '../user-favorite/user-favorite-unchecked-create-nested-many-without-script.input';

@InputType()
export class ScriptUncheckedCreateWithoutBuild_detailInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => Int, {nullable:false})
    author_id!: number;

    @Field(() => Int, {nullable:true})
    category_id?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => UserFavoriteUncheckedCreateNestedManyWithoutScriptInput, {nullable:true})
    user_favorite?: UserFavoriteUncheckedCreateNestedManyWithoutScriptInput;
}
