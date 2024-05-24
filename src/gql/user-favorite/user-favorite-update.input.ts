import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutUserFavoriteNestedInput } from '../user/user-update-one-required-without-user-favorite-nested.input';
import { ScriptUpdateOneRequiredWithoutUserFavoriteNestedInput } from '../script/script-update-one-required-without-user-favorite-nested.input';

@InputType()
export class UserFavoriteUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutUserFavoriteNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUserFavoriteNestedInput;

    @Field(() => ScriptUpdateOneRequiredWithoutUserFavoriteNestedInput, {nullable:true})
    script?: ScriptUpdateOneRequiredWithoutUserFavoriteNestedInput;
}
