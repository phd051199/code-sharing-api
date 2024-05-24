import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutScriptsNestedInput } from '../user/user-update-one-required-without-scripts-nested.input';
import { UserFavoriteUpdateManyWithoutScriptNestedInput } from '../user-favorite/user-favorite-update-many-without-script-nested.input';
import { BundleDetailUpdateOneWithoutScriptNestedInput } from '../bundle-detail/bundle-detail-update-one-without-script-nested.input';

@InputType()
export class ScriptUpdateWithoutCategoryInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    icon?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    path?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutScriptsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutScriptsNestedInput;

    @Field(() => UserFavoriteUpdateManyWithoutScriptNestedInput, {nullable:true})
    userFavorite?: UserFavoriteUpdateManyWithoutScriptNestedInput;

    @Field(() => BundleDetailUpdateOneWithoutScriptNestedInput, {nullable:true})
    bundleDetail?: BundleDetailUpdateOneWithoutScriptNestedInput;
}
