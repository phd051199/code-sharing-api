import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutScriptsNestedInput } from '../user/user-update-one-required-without-scripts-nested.input';
import { CategoryUpdateOneWithoutScriptsNestedInput } from '../category/category-update-one-without-scripts-nested.input';
import { UserFavoriteUpdateManyWithoutScriptNestedInput } from '../user-favorite/user-favorite-update-many-without-script-nested.input';

@InputType()
export class ScriptUpdateWithoutBuild_detailInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    icon?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutScriptsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutScriptsNestedInput;

    @Field(() => CategoryUpdateOneWithoutScriptsNestedInput, {nullable:true})
    category?: CategoryUpdateOneWithoutScriptsNestedInput;

    @Field(() => UserFavoriteUpdateManyWithoutScriptNestedInput, {nullable:true})
    user_favorite?: UserFavoriteUpdateManyWithoutScriptNestedInput;
}
